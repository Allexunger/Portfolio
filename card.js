$(document).ready(function() {
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = .375;
    const track = $('.spisok');
    const container = $('.slider');
    const item = $('.content');
    const btnPrev = $('.left');
    const btnNext = $('.right');
    const itemsCount = item.length;
    const itemWidth = container.width()/slidesToShow;
    const movePosition = slidesToScroll * itemWidth;



    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        });



        btnPrev.click(function(){
            position += movePosition
            setPosition ()
            chekBtns()
        });



        btnNext.click(function(){
            position -= movePosition
            setPosition ()
            chekBtns()
        });
    });



    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const chekBtns = () =>{
        btnPrev.prop('disabled', position === 0)
        btnNext.prop('disabled', 
        position <= -(itemsCount - slidesToShow)*itemWidth
        )
    };
    chekBtns()
});