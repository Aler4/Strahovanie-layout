export const inpBehavior = () => {
    if (document.querySelector('form')) {
        let form = document.querySelector('form');
        form.addEventListener('click', (e) => {
            let inpts = form.querySelectorAll('.arrow');
            inpts.forEach(el => {
                if (el.classList.contains('open')) {
                    el.classList.remove('open');
                }
            });
            if (e.target.classList.contains('arrow')) {
                (e.target).classList.add('open');
                e.target.addEventListener('change', (e) => {
                    if (e.target.classList.contains('open')) {
                        e.target.classList.remove('open');
                    }
                });
            }
        });
    }
};
