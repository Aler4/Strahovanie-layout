export const inputsBihevior = () => {
    let inp = document.querySelector('.send');
    let form = document.querySelector('form');
    let inputs = document.querySelectorAll('.valid');
    let inputsWithArrows = document.querySelectorAll('.arrow');
    let bihevior = inputInFocus.bind(this, inputs, form);
    let check = validation.bind(this, inputs, form);
    let arrows = behaviorOfArrows.bind(this, inputsWithArrows, form);
    form.addEventListener('click', (e) => {
        if (e.target.classList.contains('send')) {
            check(e);
        }
        if (e.target.classList.contains('valid')) {
            bihevior(e);
        }
        arrows(e);
    });
};
function validation(inputs, form, e) {
    inputs.forEach(el => {
        let parent = el.closest('div');
        if (el.value.length <= 3 || el.value == "") {
            e.preventDefault();
            parent.classList.remove('focus');
            parent.classList.add('error');
        }
        else if (el.value.length > 3 || el.value !== "") {
            form.submit();
            parent.classList.remove('error');
        }
    });
}
;
function inputInFocus(inputs, form, e) {
    inputs.forEach((el) => {
        let parent = el.closest('div');
        if (parent.classList.contains('focus') || e.target.classList.contains('valid') === false) {
            parent.classList.remove('focus');
        }
    });
    let evenParent = e.target.closest('div');
    if (evenParent.classList.contains('error')) {
        evenParent.classList.remove('error');
    }
    if (e.target.classList.contains('valid')) {
        evenParent.classList.add('focus');
    }
}
;
function behaviorOfArrows(inputs, form, e) {
    inputs.forEach(el => {
        if (el.classList.contains('open') || e.target.classList.contains('arrow') === false) {
            el.classList.remove('open');
        }
    });
    if (e.target.classList.contains('arrow')) {
        (e.target).classList.add('open');
    }
}
;
