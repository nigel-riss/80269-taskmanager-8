import {generateRandomInt} from './utils';

/**
 * Render filter html code
 * @param {string} filterId id of the filter
 * @return {string} formated html code of the filter
 */
const renderFilter = (filterId) => `
  <input
    type="radio"
    id="filter__${filterId}"
    class="filter__input visually-hidden"
    name="filter"
    checked
  />
  <label for="filter__${filterId}" class="filter__label">
    ${filterId} <span class="filter__${filterId}-count">${generateRandomInt(0, 15)}</span></label
  >
`;

export default renderFilter;
