/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const getFreelancer = () => {
  const numName = Math.floor(Math.random() * NAMES.length);
  const getName = NAMES[numName];
  const numOccup = Math.floor(Math.random() * OCCUPATIONS.length);
  const getOccup = OCCUPATIONS[numOccup];
  const getPrice = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min
  );

  return { getName, getOccup, getPrice };
};

console.log(getFreelancer());

const freePrice = Array.from({ length: NUM_FREELANCERS }, getFreelancer);

function getAverage(freePrice) {
  if (freePrice.length === 0) {
    return 0;
  }

  const total = freePrice.reduce((sum, freelancer) => sum + freelancer.rate, 0) 
  return Math.round(total / freePrice.length);

}
state.averageRate = getAverage(state.freePrice);

function freelanceCard(freelancer) {
    const free = getFreelancer();
    const $figure = document.createElement("figure");
    $figure.classList.add("freelancer")
    const $blockquote = document.createElement("blackquote");
    const $figcaption = document.createElement("figcaption");
    $blockquote.textContent = free.getName;
    $figure.append($blockquote);
    $figcaption.textContent = free.getOccup;
    $figure.append($figcaption);
    return $figure;
}
