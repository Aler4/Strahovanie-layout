// @ts-ignore
import AirDatepicker from 'air-datepicker';
export const createPicker = () => {
    let inpts = document.querySelectorAll('input[name="date"]');
    inpts.forEach(el => {
        let id = el.id;
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
