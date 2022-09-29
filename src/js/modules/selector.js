import SlimSelect from "slim-select";
export const createSelector = () => {
    new SlimSelect({
        select: document.querySelector('.select'),
    });
};
