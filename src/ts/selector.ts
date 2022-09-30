import  SlimSelect from "slim-select";
export const createSelector = (): any => {
	let selects: NodeList | null = document.querySelectorAll('.select');

	selects.forEach(el => {
		let id:string | undefined = (el as Element).id;
            if(id !== undefined){
            	new SlimSelect({
					select: `#${id}`,
					showSearch: false,
				})
          	}
	})
};