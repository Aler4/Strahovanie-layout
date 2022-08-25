export const dropdown = (event) => {
    event.preventDefault();
    if(event.target.classList.contains('question-dropdown__title') || event.target.classList.contains('question-dropdown__btn')) {
        event.target.parentNode.closest('.question').classList.toggle('open')

    }
};