import {getRandomArrayItem} from './utils';
import {getRandomInt} from './utils';
import {getRandomSubarray} from './utils';

const MS_TO_DAYS = 24 * 60 * 60 * 1000;

const getTask = () => ({
  title: getRandomArrayItem([
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ]),
  dueDate: Date.now() + getRandomInt(-7, 7) * MS_TO_DAYS,
  tags: new Set(getRandomSubarray([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `self esteem`,
    `education`,
    `relax`
  ], 0, 3)),
  picture: `http://picsum.photos/100/100?r=${Math.random()}.`,
  color: getRandomArrayItem([
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ]),
  repeatingDays: {
    'Mo': false,
    'Tu': false,
    'We': false,
    'Th': false,
    'Fr': false,
    'Sa': false,
    'Su': false,
  },
  isFavorite: true,
  isDone: false
});

export default getTask;
