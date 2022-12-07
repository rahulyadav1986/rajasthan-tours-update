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



// Add minus icon for collapse element which is open by default
jQuery(".collapse.show").each(function(){
    jQuery(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  jQuery(".collapse").on('show.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });


  jQuery(".card .card-header:first").addClass("active").show(); //Activate first tab

  jQuery(".card-header").on('click', '.card-header', function(){    
    if (jQuery(this).find('.accordion-toggle').hasClass('active')) {        
    }
    

 })

 $('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});
  


