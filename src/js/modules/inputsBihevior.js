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
        if (e.target.classList.contains('arrow')) {
            arrows(e);
        }
    });
};
function validation(inputs, form, e) {
    inputs.forEach(el => {
        let parent = el.closest('div');
        if (el.value.length <= 3 || el.value == "") {
            e.preventDefault();
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
    let parent = e.target.closest('div');
    inputs.forEach((el) => {
        if (el.classList.contains('focus')) {
            el.classList.remove('focus');
        }
    });
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('focus');
}
;
function behaviorOfArrows(inputs, form, e) {
    inputs.forEach(el => {
        if (el.classList.contains('open')) {
            el.classList.remove('open');
        }
    });
    (e.target).classList.add('open');
}
;
