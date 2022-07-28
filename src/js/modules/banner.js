export const changeText = () => {
    let title;
    if(window.innerWidth < 970) {
        title = document.querySelector('.banner-description__title');
        title.innerHTML = 'Часто задаваемые вопросы';
    }
    if(window.innerWidth > 970) {
        title = document.querySelector('.banner-description__title');
        title.innerHTML = `Что делать при наступлении <br> страхового случая?`;
    }
    return title;
};