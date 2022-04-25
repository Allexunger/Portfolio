$(document).ready(function() {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = .25;
    const track = $('.slider-track')
    const container = $('.slider-container');
    const item = $('.progect_card');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;



    item.each(function(index, item){ 
        $(item).css({
            minWidth: itemWidth,
        });



        btnPrev.click( function(){
            position += movePosition;
            setPosition ()
            chekBtns ()
        });



        btnNext.click( function(){
            position -= movePosition;
            setPosition ()
            chekBtns ()
        });
    });



    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const chekBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', 
        position <= -(itemsCount - slidesToShow) * itemWidth
        )

    }
    chekBtns ()

});