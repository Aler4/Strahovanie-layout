import  SlimSelect from "slim-select";
export const createSelector = (): void => {
	new SlimSelect({
		select: (document.querySelector('.select') as Element),
	})
};