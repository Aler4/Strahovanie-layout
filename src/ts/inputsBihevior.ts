export const inputsBihevior = (): void => {
	let inp: HTMLInputElement | null = document.querySelector('.send');
	let form: HTMLFormElement | null = document.querySelector('form');
	let inputs: NodeList | null = document.querySelectorAll('.valid');
	let inputsWithArrows: NodeList | null = document.querySelectorAll('.arrow');

	let bihevior = inputInFocus.bind(this, (inputs as NodeList),(form as HTMLFormElement));
	let check = validation.bind(this,(inputs as NodeList),(form as HTMLFormElement));
	let arrows = behaviorOfArrows.bind(this,(inputsWithArrows as NodeList),(form as HTMLFormElement));

	(form as HTMLFormElement).addEventListener('click', (e) => {
		
		if((e.target as HTMLInputElement).classList.contains('send')) {
			check(e);
		}

		if((e.target as HTMLInputElement).classList.contains('valid')) {
			bihevior(e);
		}

		if (!(e.target as HTMLInputElement).classList.contains('valid')){
			inputs?.forEach(el => {
				let parent: HTMLElement | null = (el as HTMLElement).closest('div');
				(parent as HTMLElement).classList.remove('focus');
			});
		}


		arrows(e);
 });

}

function validation(inputs:NodeList, form:HTMLFormElement,e:Event): void {


		(inputs as NodeList).forEach(el => {
			let parent:HTMLElement | null = (el as HTMLElement).closest('div');

			if((el as HTMLInputElement).value.length <= 3 || (el as HTMLInputElement).value == "") {
				e.preventDefault();
				(parent as HTMLElement).classList.remove('focus');
				(parent as HTMLElement).classList.add('error');
			}

			else if ((el as HTMLInputElement).value.length > 3 || (el as HTMLInputElement).value !== "") {
				(form as HTMLFormElement).submit();
				(parent as HTMLElement).classList.remove('error');
			}
	})
};

function inputInFocus(inputs:NodeList, form:HTMLFormElement,e:Event): any {


	(inputs as NodeList).forEach((el) => {
	let parent: Element | null = (el as Element).closest('div');

		if((parent as HTMLElement).classList.contains('focus') || !(e.target as Element).classList.contains('valid')) {
			(parent as HTMLElement).classList.remove('focus');
		}
	})

	let evenParent = (e.target as Element).closest('div');

	if((evenParent as HTMLElement).classList.contains('error')) {
		(evenParent as HTMLElement).classList.remove('error');
	}
	if((e.target as Element).classList.contains('valid')){
		(evenParent as HTMLInputElement).classList.add('focus');
	}
};

function behaviorOfArrows(inputs:NodeList, form:HTMLFormElement,e:Event){
	(inputs as NodeList).forEach(el => {
    if((el as Element).classList.contains('open') || !(e.target as Element).classList.contains('arrow')) {
      (el as Element).classList.remove('open');
    }
  });

	if((e.target as Element).classList.contains('arrow')) {
  	((e.target) as HTMLElement).classList.add('open');
	}

};