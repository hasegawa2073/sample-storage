export const RemoveEmptyList = () => {
    const TodoList = document.querySelectorAll('.todo__li');
    TodoList.forEach((list) => {
        const TodoText = list.querySelector('.todo__text');
        TodoText?.addEventListener('focusout', (e) => {
            const target = e.currentTarget;
            if (target.textContent === '') {
                list.remove();
            }
        });
    });
};
