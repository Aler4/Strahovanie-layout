export const inpBehavior = () => {
    if (document.querySelector('form')) {
        let form = document.querySelector('form');
        form.addEventListener('click', (e) => {
            let inpts = form.querySelectorAll('.arrow');
            if (e.target.classList.contains('arrow')) {
                (e.target).classList.add('open');
                // @ts-ignore
                e.target.onchange = this.classList.remove('open');
            }
            else {
                inpts.forEach(el => {
                    if (el.classList.contains('open')) {
                        el.classList.remove('open');
                    }
                });
            }
        });
    }
};
