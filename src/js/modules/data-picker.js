// @ts-ignore
import AirDatepicker from 'air-datepicker';
export const createPicker = () => {
    let inpts = document.querySelectorAll('input[name="date"]');
    let date = new Date();
    let day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
    let month = (date.getMonth() < 10) ? `0${date.getMonth()}` : date.getMonth();
    inpts.forEach(el => {
        let id = el.id;
        el.placeholder = `${day}.${month}.${date.getFullYear()}`;
        if (id !== undefined) {
            let picker = new AirDatepicker(`#${id}`, {
                inline: false,
                autoClose: true,
                isModile: true,
                buttons: ['today', 'clear'],
                onSelect() {
                    el.classList.remove('open');
                }
            });
        }
    });
};
