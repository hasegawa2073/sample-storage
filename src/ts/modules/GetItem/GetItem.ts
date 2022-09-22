export const GetItem = () => {
  const todoUl = document.querySelector<HTMLUListElement>('.todo__ul');
  const localStorageItemLength = localStorage.length - 1;
  for (let i = 0; i <= localStorageItemLength; i++) {
    const item = localStorage.key(i);
    const todoLiHtml = `
      <li class="todo__li" aria-label="Todoリスト">
        <button class="todo__button" aria-label="Todoの完了ボタン"></button>
        <p class="todo__text" contenteditable="true">${item}</p>
      </li>
    `;
    todoUl?.insertAdjacentHTML('afterbegin', todoLiHtml);
  }
};
