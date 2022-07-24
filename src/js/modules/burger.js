export const addBurger = () => {
    let res;
    if(window.innerWidth < 1060 && !(document.querySelector('.burger'))) {
        res = document.querySelector('.menu');
        res.classList.add('burger');
        res.classList.remove('menu')
    }
    if(document.querySelector('.burger') && window.innerWidth > 1060 ){
        res = document.querySelector('.burger');
        res.classList.add('menu');
        res.classList.remove('burger');
    }
    return res;
};