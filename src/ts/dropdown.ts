export const dropdown: Function = (event:Event):void => {
    event.preventDefault();
    let target: Element = (event.target as Element);
    let  parent = target.parentNode;
    if(target.classList.contains('question-dropdown__title') || (event.target as Element).classList.contains('question-dropdown__btn')) {
        if (target != null && parent != null) {
            ((parent as Element).closest('.question') as Element).classList.toggle('open')
        }
    }
};