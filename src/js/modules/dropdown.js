export const dropdown = (event) => {
    event.preventDefault();
    let target = event.target;
    let parent = target.parentNode;
    if (target.classList.contains('question-dropdown__title') || event.target.classList.contains('question-dropdown__btn')) {
        if (target != null && parent != null) {
            parent.closest('.question').classList.toggle('open');
        }
    }
};
