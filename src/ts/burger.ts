export const addBurger = (): HTMLElement | null => {
    let res:HTMLElement | null = null;
    if (window.innerWidth < 1060 && !(document.querySelector('.burger'))) {
        res = document.querySelector('.menu');
        if(res != null){
            res.classList.add('burger');
            res.classList.remove('menu');
        }
    }
    if (document.querySelector('.burger') && window.innerWidth > 1060) {
        res = document.querySelector('.burger');
        if (res != null){
            res.classList.add('menu');
            res.classList.remove('burger');
        }
    }
    return res;
};
