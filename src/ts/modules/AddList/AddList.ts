import { FocusList } from '../FocusList/FocusList.js';
import { RemoveEmptyList } from '../RemoveEmptyList/RemoveEmptyList.js';

export const AddList = () => {
  const todoUl = document.querySelector<HTMLUListElement>('.todo__ul');
  const addButton = document.querySelector<HTMLButtonElement>('.add__button');
  const todoLiHtml = `
    <li class="todo__li" aria-label="Todoリスト">
      <button class="todo__button" aria-label="Todoの完了ボタン"></button>
      <p class="todo__text" contenteditable="true"></p>
    </li>
  `;
  addButton?.addEventListener('click', (e: MouseEvent) => {
    todoUl?.insertAdjacentHTML('beforeend', todoLiHtml);
    FocusList();
    RemoveEmptyList();
  });
};
