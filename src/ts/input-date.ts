export const inpBehavior: Function = (): void => {
    if (document.querySelector('form')){
        let form:Element | null = (document.querySelector('form') as Element);
        (form as Element).addEventListener('click',(e) => {
            let inpts:NodeList | null = (form as Element).querySelectorAll('.arrow');
            if((e.target as Element).classList.contains('arrow')){
            ((e.target) as Element).classList.add('open');
                // @ts-ignore
                (e.target as HTMLInputElement).onchange = this.classList.remove('open');

            }
            else {
                (inpts as NodeList).forEach(el => {
                   if((el as Element).classList.contains('open')) {
                       (el as Element).classList.remove('open');
                   }
               })
            }
        })

    }
}