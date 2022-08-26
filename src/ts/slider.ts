export class Slider {
    runner: Element | undefined;
    range:Element | undefined;
    points:NodeList | undefined;
    slidersContainer: Element | undefined;
    slides: NodeList | undefined;
    runnerWidth: number | undefined;
    progress: NodeJS.Timeout | number | undefined;
    constructor() {
        if (document.querySelector('.slider-section') == null){
            return;
        }
        this.runner = (document.querySelector('.slider-range_runner') as Element);
        this.range = (document.querySelector('.slider-range') as Element);
        this.points = document.querySelectorAll('.slider-step');
        this.slidersContainer = (document.querySelector('.sliders') as Element)
        this.slides = document.querySelectorAll('.slide');
        this.runnerWidth = Math.floor(this.range.clientWidth / 2) / 100;
        this.move();

        this.range.addEventListener('click',(e) => {
            switch (e.target) {
                case ((this.points as NodeList)[0]) : {
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
        this.slidersContainer.addEventListener('mouseover',(e) => {
            if(e.target.classList.contains('slide__description') || e.target.parentNode.classList.contains('slide__description')){
                clearInterval(this.progress);
            }
        })
        this.slidersContainer.addEventListener('mouseout',(e) => {
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
    changeSlide(point: Element,slide: Element,slides: NodeList) {
        if(point.classList.contains('active')){
            for (let i = 0; i <= slides.length - 1; i++){
                (slides[i] as Element).classList.remove('visible')
            }
            slide.classList.add('visible');
        }
    }
    backToInitState(): void {
        clearInterval((this.progress as NodeJS.Timeout));
        (this.runner as HTMLElement).style.width = '0px';
        ((this.points as NodeList)[2] as Element).classList.remove('active');
        ((this.points as NodeList)[1] as Element).classList.remove('active');
        this.changeSlide(((this.points as NodeList)[0] as Element),((this.slides as NodeList)[0] as Element),(this.slides as NodeList));
    }
    move(): void {
        this.progress = setInterval(() => this.rangeStep(0),100)
    }
}
