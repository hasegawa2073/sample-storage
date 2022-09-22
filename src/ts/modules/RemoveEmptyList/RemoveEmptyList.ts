export const RemoveEmptyList = () => {
  const TodoList = document.querySelectorAll<HTMLLIElement>('.todo__li');
  TodoList.forEach((list) => {
    const TodoText = list.querySelector('.todo__text');
    TodoText?.addEventListener('focusout', (e) => {
      const target = e.currentTarget as HTMLParagraphElement;
      if (target.textContent === '') {
        list.remove();
      }
    });
  });
};
