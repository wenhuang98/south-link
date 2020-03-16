/*table*/
$("#sl-logo").wrap("<a href='./'></a>'");
$(".footer-logo").wrap("<a href='./'></a>'");

$(document).ready(function() {
    $('#table-donate').DataTable();
    
} );

$.extend( $.fn.dataTable.defaults, {
    searching: false,
    ordering:  false,
    lengthChange:false,
    bInfo:false,
   scrollX: true,
  
    
    
} );


$('#table-donate').DataTable({
   "dom": '<"row"<"col-sm-4"l><"col-sm-4"f>>ti<"pagenumber"p>'
});



//OWL

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
});



$(window).scroll(function() {
    if ($(this).scrollTop() < 100 || $(this).scrollTop() > $(document).height() - $(window).height() - 300) {
        $('.scrollToTop').fadeOut();
    } else {
        $('.scrollToTop').fadeIn();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
});

$('.my-select').selectpicker();

//image-width
 var w = $(window).width();
 $('.events-image').css('width', w / 2);


//mb-nav
window.onload = function() {

                  new Mmenu( "#my-menu", {
                     extensions: [
                      "position-back",
                        "position-top",
                        "pagedim-black",
                        "border-full"
                     ],
                      
                     navbars		: [{
			height 	: 2,
			content : [
				'<div style="display:flex ; justify-content:space-between"><a href="index.html"><img src="assets/img/logo.png"></a></div> ',"close",
			
			]
		},
                                     ],  
                     "autoHeight": true
                  });
              }
          ;
                

//schedule

$('.schdule-content').show();

$('a[data-toggle="tab"][href="#tab-4"]').on('shown.bs.tab', function (e) {
    $('.schdule-content').show();
   
})

$('a[data-toggle="tab"][href="#tab-5"]').on('shown.bs.tab', function (e) {
    $('.schdule-content').hide();
 
})