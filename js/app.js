// window.addEventListener('load', function(){
//     var load_screen = document.getElementById('load_screen');
//     document.body.removeChild(load_screen);
// })

$('.mobile-menu').slicknav({
    label: '',
    prependTo: 'header',
    closedSymbol: '+',
    openedSymbol: '-',
    allowParentLinks:"true",
});

jQuery('#hero-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
	dots:false,	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

jQuery('#testi-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
	dots:true,	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

jQuery('#desti-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
	dots:true,	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});





 $('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});
  


