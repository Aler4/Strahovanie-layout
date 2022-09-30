import SlimSelect from "slim-select";
export const createSelector = () => {
    let selects = document.querySelectorAll('.select');
    selects.forEach(el => {
        let id = el.id;
        if (id !== undefined) {
            new SlimSelect({
                select: `#${id}`,
                showSearch: false,
            });
        }
    });
};
