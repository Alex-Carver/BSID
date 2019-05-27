$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(".scrollTo").on('click', function(e) {
     e.preventDefault();
     var target = $(this).attr('href');
     $('html, body').animate({
       scrollTop: ($(target).offset().top)
     }, 1000);
  });


function scrollWaypointInit( items, trigger ) {
  items.each( function() {
    var element = $(this),
        osAnimationClass = element.data("animation"),
        osAnimationDelay = element.attr('data-animation-delay');
 
    element.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var trigger = ( trigger ) ? trigger : element;
 
    trigger.waypoint(function() {
        element.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '80%'
    });
  });
}

//Call the init

$(document).ready(function(){

scrollWaypointInit( $('.animateMe') );

});

//Right1 and Left1 controls

  $(function(){
        $('#v-pills-home-tab').click(function(){
            $('#right1').show();
            $('#left1').show();
        });
    });

  $(function(){
        $('#v-pills-messages-tab').click(function(){
            $('#right1').hide();
            $('#left1').hide();
        });
    });

     $(function(){
        $('#v-pills-settings-tab').click(function(){
            $('#right1').hide();
            $('#left1').hide();
        });
    });


//Right2 and Left2 controls
  $(function(){
        $('#v-pills-messages-tab').click(function(){
            $('#right2').show();
            $('#left2').show();
        });
    });

    $(function(){
        $('#v-pills-home-tab').click(function(){
            $('#right2').hide();
            $('#left2').hide();
        });
    });

       $(function(){
        $('#v-pills-settings-tab').click(function(){
            $('#right2').hide();
            $('#left2').hide();
        });
    });

//Right3 and Left3 controls

  $(function(){
        $('#v-pills-settings-tab').click(function(){
            $('#right3').show();
            $('#left3').show();
        });
    });

  $(function(){
        $('#v-pills-messages-tab').click(function(){
            $('#right3').hide();
            $('#left3').hide();
        });
    });

    $(function(){
        $('#v-pills-home-tab').click(function(){
            $('#right3').hide();
            $('#left3').hide();
        });
    });

    var sidebarScrollTop = 0;

$(document).ready(function() {
    sidebarScrollTop = $("#sidebar").offset();

    $(window).scroll(function () { 
        var docScrollTop = $('body,html').scrollTop();

        if(docScrollTop > sidebarScrollTop.top) {
            $("#sidebar").css({ position: 'fixed', top: '60px' });
        } else {
            $("#sidebar").css({ position: 'static' });
        }
    });
});

$(window).resize(function() {
    sidebarScrollTop = $("#sidebar").offset().top;
});

$(document).resize(function() {
    sidebarScrollTop = $("#sidebar").offset().top;
});

 

