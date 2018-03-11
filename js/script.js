$(function()
{
    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
    $("#datepicker").datepicker({});
    var pager = jQuery('#pagination').pagination({
        // max page size
        maxSize: 5,
        totals: 100,
        // initial page
        page: 1,
       // max number items per page
        pageSize: 5,
        lastText: '&raquo;&raquo;', //&raquo;
        firstText: '&laquo;&laquo;',
        prevText: 'back',//&laquo;
        nextText: 'next',
        rotate: true,

        // displays Previous / Next buttons
        directionLinks: true,
        boundaryLinks: false
    });

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $(".nav .toggle-nav").click(function(e){
        $(".nav .nav-mobile").addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

  $.fn.scrollToTop=function(){
    $(this).hide().removeAttr("href");	
    if($(window).scrollTop()!="0"){
        $(this).fadeIn("slow")
  }
  var scrollDiv=$(this);
  $(window).scroll(function(){
    if($(window).scrollTop()=="0"){
    $(scrollDiv).fadeOut("slow")
    }else{
    $(scrollDiv).fadeIn("slow")
  }
  });
    $(this).click(function(){
      $("html, body").animate({scrollTop:0},"slow")
    })
  }
});
$(function() {$("#toTop").scrollToTop();});