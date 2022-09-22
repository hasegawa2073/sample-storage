export const SetList = () => {
    const todoContents = document.querySelectorAll('.todo__text');
    todoContents.forEach((content) => {
        content.addEventListener('focusout', (e) => {
            const text = content.textContent;
            if (text !== '') {
                localStorage.setItem(text, text);
            }
        });
    });
};
