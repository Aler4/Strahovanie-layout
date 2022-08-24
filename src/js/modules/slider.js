export class Slider {
    constructor() {
        this.runner = document.querySelector('.slider-range_runner');
        this.range = document.querySelector('.slider-range');
        this.points = document.querySelectorAll('.slider-step');
        this.slidesContainer = document.querySelector('.sliders')
        this.slides = document.querySelectorAll('.slide');
        this.runnerWidth = Math.floor(this.range.clientWidth / 2) / 100;
        this.move();

        this.range.addEventListener('click',(e) => {
            switch (e.target) {
                case this.points[0] : {
                    this.backToInitState();
                    this.move();
                    break;
                }
                case this.points[1] : {
                    this.rangeStep(Math.floor(this.range.clientWidth / 2))
                    clearInterval(this.progress);
                    this.move();
                    break;
                }
                case this.points[2] : {
                    this.rangeStep((this.range.clientWidth - this.points[0].clientWidth))

                    break;
                }
            }
        })
        this.slidesContainer.addEventListener('mouseover',(e) => {
            if(e.target.classList.contains('slide__description') || e.target.parentNode.classList.contains('slide__description')){
                clearInterval(this.progress);
            }
        })
        this.slidesContainer.addEventListener('mouseout',(e) => {
            if(e.target.classList.contains('slide__description') || e.target.parentNode.classList.contains('slide__description')){
                this.move();
            }
        })
    }
    rangeStep(point) {
        if(typeof point !== "undefined") {
            this.runner.style.width = point + 'px'
        }
        if(parseInt(this.runner.style.width) == Math.floor(this.range.clientWidth / 2)) {
            this.points[1].classList.add('active');
            this.changeSlide(this.points[1],this.slides[1],this.slides);
            this.points[2].classList.remove('active');
        }
        if (parseInt(this.runner.style.width) >= (this.range.clientWidth - this.points[0].clientWidth)){
            this.points[1].classList.add('active');
            this.points[2].classList.add('active');
            this.changeSlide(this.points[2],this.slides[2],this.slides);
            clearInterval(this.progress)
        }
        this.runner.style.width = Number(this.runner.style.width.replace('px', '')) + this.runnerWidth + 'px';
    }
    changeSlide(point,slide,slides) {
        if(point.classList.contains('active')){
            for (let i = 0; i <= slides.length - 1; i++){
                slides[i].classList.remove('visible')
            }
            slide.classList.add('visible');
        }
    }
    backToInitState() {
            clearInterval(this.progress)
            this.runner.style.width = '0px';
            this.points[2].classList.remove('active');
            this.points[1].classList.remove('active');
        this.changeSlide(this.points[0],this.slides[0],this.slides);
    }
    move(start) {
        this.progress = setInterval(() => this.rangeStep(start),100)
    }
}
