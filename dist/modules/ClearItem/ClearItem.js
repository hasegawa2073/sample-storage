export const ClearItem = () => {
    const todoContents = document.querySelectorAll('.todo__text');
    todoContents.forEach((content) => {
        content.addEventListener('focusout', () => {
            localStorage.clear();
        });
    });
};
