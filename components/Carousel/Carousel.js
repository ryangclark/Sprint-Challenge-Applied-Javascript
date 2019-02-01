class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        console.log('class', this.carousel);
        // get your buttons
        this.leftButton = this.carousel.getElementsByClassName('left-button')['0'];
        this.rightButton = this.carousel.getElementsByClassName('right-button')['0'];
        // add eventListeners to buttons
        this.leftButton.addEventListener('click', () => this.leftClick());
        this.rightButton.addEventListener('click', () => this.rightClick());
        // get your images
        this.imagesList = this.carousel.querySelectorAll('img');
        // current index
        this.currentIndex = 0;
        this.clickHandler();
    }
    leftClick() {
        if (this.currentIndex === 0) {
            this.currentIndex = this.imagesList.length - 1;
        } else {
            this.currentIndex -= 1;
        }
        console.log(this.currentIndex);
        return this.clickHandler();
    }
    rightClick() {
        if (this.currentIndex == this.imagesList.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex += 1;
        }
        console.log(this.currentIndex);
        return this.clickHandler();
    }
    clickHandler() {
        this.imagesList.forEach(image => image.style.display = 'none');
        this.imagesList[this.currentIndex].style.display = 'block';
    }
}

let carousel = document.getElementsByClassName('carousel')['0'];
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/