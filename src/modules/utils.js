/**
 * Returns random number in range
 * @param {number} min
 * @param {number} max
 * @return {number} integer in range
 */
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


/**
 * Returns random array item
 * @param {Array} array
 * @return {*}
 */
const getRandomArrayItem = (array) => array[getRandomInt(0, array.length - 1)];


/**
 * Return subarray from given array with random number of elements
 * Elements do not repeat
 * @param {Array} array
 * @param {number} minCount minimum quantity of random elements
 * @param {number} maxCount maximun quantity of random elements
 * @return {Array}
 */
const getRandomSubarray = (array, minCount, maxCount) => {
  // Checking bounds just in case
  minCount = minCount > array.length ? array.length : minCount;
  maxCount = maxCount > array.length ? array.length : maxCount;
  // Getting quantity of elements to pull
  const count = getRandomInt(minCount, maxCount);
  // Creating copy of array to be clean
  const tempArray = [...array];
  // Creating subarray
  const subarray = [];

  // Pulling random elements
  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomInt(0, tempArray.length - 1);
    const randomElement = tempArray.splice(randomIndex, 1);
    subarray.push(randomElement);
  }

  return subarray;
};


/**
 * Inserts html code inside an element before closing tag
 * @param {Element} element
 * @param {string} html
 */
const insertHTMLToElement = (element, html) => {
  element.insertAdjacentHTML(`beforeend`, html);
};

export {
  getRandomInt,
  getRandomArrayItem,
  getRandomSubarray,
  insertHTMLToElement,
};
