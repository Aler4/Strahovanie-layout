// @ts-ignore
import AirDatepicker from 'air-datepicker';
export const createPicker: Function = ():void => {
    let inpts:NodeList = document.querySelectorAll('input[name="date"]');
    let date: Date = new Date();
    let day: number | string = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
    let month: number | string = (date.getMonth() < 10) ? `0${date.getMonth()}` : date.getMonth();

    inpts.forEach(el => {
        let id:string | undefined = (el as Element).id;
          (el as HTMLInputElement).placeholder = `${day}.${month}.${date.getFullYear()}`;
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