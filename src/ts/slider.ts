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
        // @ts-ignore
        this.move();

        this.range.addEventListener('click',(e) => {
            switch (e.target) {
                case ((this.points as NodeList)[0]) : {
                    this.backToInitState();
                    // @ts-ignore
                    this.move();
                    break;
                }
                case (this.points as NodeList)[1] : {
                    this.rangeStep(Math.floor((this.range as Element).clientWidth / 2))
                    clearInterval((this.progress as NodeJS.Timeout));
                    // @ts-ignore
                    this.move();
                    break;
                }
                case (this.points as NodeList)[2] : {
                    this.rangeStep(((this.range as Element).clientWidth - ((this.points as NodeList)[0] as Element).clientWidth))

                    break;
                }
            }
        })
        this.slidersContainer.addEventListener('mouseover',(e) => {
            if((e.target as Element).classList.contains('slide__description') || ((e.target as Element).parentNode as Element).classList.contains('slide__description')){
                clearInterval((this.progress as NodeJS.Timeout));
            }
        })
        this.slidersContainer.addEventListener('mouseout',(e) => {
            if((e.target as Element).classList.contains('slide__description') || ((e.target as Element).parentNode as Element).classList.contains('slide__description')){
                this.move(undefined);
            }
        })
    }
    rangeStep(point: number | undefined) {
        if(typeof point !== "undefined") {
            (this.runner as HTMLElement).style.width = point + 'px'
        }
        if(parseInt((this.runner as HTMLElement).style.width) == Math.floor((this.range as Element).clientWidth / 2)) {
            ((this.points as NodeList)[1] as Element).classList.add('active');
            this.changeSlide(((this.points as NodeList)[1] as Element),((this.slides as NodeList)[1] as Element),(this.slides as NodeList));
            ((this.points as NodeList)[2] as Element).classList.remove('active');
        }
        if (parseInt((this.runner as HTMLElement).style.width) >= ((this.range as HTMLElement).clientWidth - ((this.points as NodeList)[0] as Element).clientWidth)){
            ((this.points as NodeList)[1] as Element).classList.add('active');
            ((this.points as NodeList)[2] as Element).classList.add('active');
            this.changeSlide(((this.points as NodeList)[2] as Element),((this.slides as NodeList)[2] as Element),(this.slides as NodeList));
            clearInterval((this.progress as NodeJS.Timeout));
        }
        (this.runner as HTMLElement).style.width = Number((this.runner as HTMLElement).style.width.replace('px', '')) + (<number>this.runnerWidth) + 'px';
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
    move(start: number | undefined): void {
        this.progress = setInterval(() => this.rangeStep(start),100)
    }
}
