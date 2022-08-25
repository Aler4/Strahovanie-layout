export const changeText: Function = (): HTMLElement | null => {
    let title:HTMLElement | null = document.querySelector('.banner-description__title');
    if(window.innerWidth < 970 && title != null) {

        title.innerHTML = 'Часто задаваемые вопросы';
    }
    if(window.innerWidth > 970 && title != null) {
        title.innerHTML = `Что делать при наступлении <br> страхового случая?`;
    }
    return title;
};