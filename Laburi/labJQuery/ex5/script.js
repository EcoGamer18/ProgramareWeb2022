$(document).ready(function(){

    const slides = $("li");

    let index = 0;

    $("#previous").click(function(){
        moveTo(index - 1);
    });

    $("#next").click(function(){
        moveTo(index + 1);
    });


    const moveTo = (newIndex) => {
        if (newIndex >= $(slides).length) {
            index = 0;
        } else if (newIndex < 0) {
            index = $(slides).length - 1;
        } else {
            index = newIndex;
        }

        updateSlide();
    }

    const updateSlide = () => {
        for (const slide of slides) {
            if (slide === slides[index]) {
                $(slide).css("display" , "block");
            } else {
                $(slide).css("display" , "none");
            }
        }
    }

    updateSlide();
});