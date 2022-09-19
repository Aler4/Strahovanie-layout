export const inpBehavior: Function = (): any => {
    if(document.querySelector('form')){
        let form:Element | null = (document.querySelector('form') as Element);
        (form as Element).addEventListener('click',(e) => {
            let inpts:NodeList | null = (form as Element).querySelectorAll('.arrow');

            (inpts as NodeList).forEach(el => {
              if((el as Element).classList.contains('open')) {
                  (el as Element).classList.remove('open');
              }
            });

            if((e.target as Element).classList.contains('arrow')){
              ((e.target) as Element).classList.add('open');
                (e.target as HTMLInputElement).addEventListener('input', (e)=> {
                  if((e.target as Element).classList.contains('open')){
                    (e.target as Element).classList.remove('open')
                  }
              })
            }              
        })
    }
}