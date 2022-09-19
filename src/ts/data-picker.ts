// @ts-ignore
import AirDatepicker from 'air-datepicker';
export const createPicker: Function = ():void => {
    let inpts:NodeList = document.querySelectorAll('input[name="date"]');

    inpts.forEach(el => {
        let id:string | undefined = (el as Element).id;
            if(id !== undefined){
               let picker =  new AirDatepicker(`#${id}`,{
                  inline: false,
                  autoClose:true,
                  isModile: true,
                  buttons: ['today', 'clear'],
                  onSelect() {
                    (el as Element).classList.remove('open');
                  }
                })
          }
    });
 
};