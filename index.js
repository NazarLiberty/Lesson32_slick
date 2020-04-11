$(document).ready(
    $('.slider').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        nextArrow: `<img src="next.png" class="slider__next">`,
        prevArrow: `<img src="left.png" class="slider__prev">`,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                },

                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1

                }

            }
        ]
    })
)
