/**
 * Return random number in range
 * @param {number} min
 * @param {number} max
 * @return {number} integer in range
 */
const generateRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


/**
 * Inserts html code inside an element before closing tag
 * @param {Element} element
 * @param {string} html
 */
const insertHTMLToElement = (element, html) => {
  element.insertAdjacentHTML(`beforeend`, html);
};

export {generateRandomInt, insertHTMLToElement};
