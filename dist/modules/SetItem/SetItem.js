export const SetItem = () => {
    const todoContents = document.querySelectorAll('.todo__text');
    todoContents.forEach((content, index, contentArray) => {
        content.addEventListener('focusout', (e) => {
            contentArray.forEach((content) => {
                const text = content.textContent;
                if (text !== '') {
                    localStorage.setItem(text, text);
                }
            });
        });
    });
};
