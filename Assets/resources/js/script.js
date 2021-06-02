$(document).ready(function(){
    
    
    /* for sticky navagation*/
    $('.js--section-featurs').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass ('sticky');

        }else{
            $('nav').removeClass('sticky');

        }

   }, {
        offset: '60px'
      });


                  /*scroll on button */
      $('.js--scroll-to-plan').click(function()  {
          $('html,body').animate({ scrollTop: $('.js--section-plan').offset().top},1000);

      });

      $('.js--scroll-to-start').click(function()  {
        $('html,body').animate({ scrollTop: $('.js--section-featurs').offset().top},1000);

    });

                   /*Navagation Scroll*/
    $(function(){
        $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
                if ($target.length) {
                    var targetOffset = $target.offset().left;
                    $('html,body').animate({scrollLeft: targetOffset}, 1000);
                    return false;
                }
            }
        });
    });

                     /*Animation on Scroll*/
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset:'50%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset:'50%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset:'50%'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset:'50%'
    });

    /*Mobile nevagation*/
    $('.js--nav-icon').click(function(){
        var nav=$('.js--main-nav');
        var icon=$('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');


        }

        ion-close-round
    });

  

});