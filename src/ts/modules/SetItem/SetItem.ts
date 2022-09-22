export const SetItem = () => {
  const todoContents =
    document.querySelectorAll<HTMLParagraphElement>('.todo__text');
  todoContents.forEach((content, index, contentArray) => {
    content.addEventListener('focusout', (e) => {
      contentArray.forEach((content) => {
        const text: string = content.textContent as string;
        if (text !== '') {
          localStorage.setItem(text, text);
        }
      });
    });
  });
};
