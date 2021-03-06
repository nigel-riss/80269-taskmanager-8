import renderFilter from './modules/render-filter';
import renderCard from './modules/render-card';
import getTask from './modules/get-task';
import {insertHTMLToElement, getRandomInt} from './modules/utils';
import task from './modules/get-task';
console.log(task);


/**
 * Render multiple cards to tasks board
 * @param {number} quantity number of cards to draw
 */
const addMultipleCards = (quantity) => {
  const tasksBoard = document.querySelector(`.board__tasks`);
  tasksBoard.innerHTML = ``; // Cleaning existing content
  let cardsHmtl = ``;
  for (let i = 0; i < quantity; i++) {
    cardsHmtl += renderCard(getTask());
  }
  insertHTMLToElement(tasksBoard, cardsHmtl);
};


// Drawing filters (task 5)
const mainFilter = document.querySelector(`.main__filter`);
const filterIds = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];
let filtersHtml = ``;
filterIds.forEach((filterId) => {
  filtersHtml += renderFilter(filterId);
});
insertHTMLToElement(mainFilter, filtersHtml);

// Drawing cards (task 6)
addMultipleCards(7);

// Adding random quantity of tasks on filter click (task 7)
document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`filter__label`)) {
    addMultipleCards(getRandomInt(3, 10));
  }
});
