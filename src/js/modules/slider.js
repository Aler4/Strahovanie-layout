 export function setProgress(){
    let runner = document.querySelector('.slider-range_runner');
    let parent = document.querySelector('.slider-range');
    let point2 = document.querySelector('.point_2');
    let point3 = document.querySelector('.point_3');

    let width = 5;
    if(parseInt(runner.style.width) == (parent.clientWidth / 2)) {
        point2.classList.add('active');
    }
    if (parseInt(runner.style.width) == (parent.clientWidth - 5)){
        point3.classList.add('active');
        return;
    }
    runner.style.width = Number(runner.style.width.replace('px', '')) + width + 'px';

};
