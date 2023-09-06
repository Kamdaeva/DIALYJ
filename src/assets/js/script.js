var multipleItemCarousel = document.querySelector('#carouselExampleControls')


if(window.matchMedia("(min-width:768px)").matches){

    var carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false,
        wrap: false,
      })
    var carouselWidth = $('.carousel-inner-1')[0].scrollWidth;
    var cardWidth = $('.carousel-item-1').Width();
    
    var scrollPosition = 0;
    
    $('.carousel-control-next-1').on('click', function(){
        if(scrollPosition < (carouselWidth - (cardWidth * 4))){
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner-1').animate({scrollLeft: scrollPosition},600);
        }
    
    })
    $('.carousel-control-prev-1').on('click', function(){
        if(scrollPosition > 0){
            console.log('prev');
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner-1').animate({scrollLeft: scrollPosition},600);
        }
    
    })
}else{
    $(multipleItemCarousel).addClass('slide');
}


const carou = document.querySelector('#carousel')

let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
}

const dragging =(e) =>{
    carou.scrollLeft = e.pageX;
}

const dragStop = () => {
    isDragStart = false;
};

carou.addEventListener("mousedown",dragStart);
carou.addEventListener("mousemove",dragging);
carou.addEventListener("mouseup",dragStop)
