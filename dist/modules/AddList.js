export const AddList = () => {
    const todoUl = document.querySelector('.todo__ul');
    const addButton = document.querySelector('.add__button');
    const todoLiHtml = `
    <li class="todo__li" aria-label="Todoリスト">
      <button class="todo__button" aria-label="Todoの完了ボタン"></button>
      <p class="todo__text" contenteditable="true"></p>
    </li>
  `;
    addButton?.addEventListener('click', (e) => {
        todoUl?.insertAdjacentHTML('beforeend', todoLiHtml);
    });
};
