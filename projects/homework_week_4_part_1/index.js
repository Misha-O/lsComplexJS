/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');
const addDivButton = homeworkContainer.querySelector('#addDiv');

let startY = 0;
let startX = 0;
let currentDrag;

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('mousemove', (e) => {
  // check if smth is dragged -> to move left click coord subtracts mouse position within dragged el
  if (currentDrag) {
    currentDrag.style.top = `${e.clientY - startY}px`;
    currentDrag.style.left = `${e.clientX - startX}px`;
  }
});

export function createDiv() {
  const divItem = document.createElement('div');
  divItem.className = 'draggable-div';

  // random size
  const min = 40;
  const max = 300;
  divItem.style.height = `${getRandom(min, max)}px`;
  divItem.style.width = `${getRandom(min, max)}px`;

  // random position
  divItem.style.top = `${getRandom(0, window.innerHeight)}px`;
  divItem.style.left = `${getRandom(0, window.innerWidth)}px`;

  // random color
  const maxColor = 16777215;
  divItem.style.backgroundColor = `#${getRandom(0, maxColor).toString(16)}`;

  divItem.addEventListener('mousedown', (e) => {
    currentDrag = divItem;
    startX = e.offsetX;
    startY = e.offsetY;
  });
  divItem.addEventListener('mouseup', () => (currentDrag = false));

  return divItem;
}

addDivButton.addEventListener('click', () => {
  const divItem = createDiv();
  homeworkContainer.appendChild(divItem);
});
