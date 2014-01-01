$( document ).ready(function() {
  
  //navbar links active class
  $('.navbar-nav li').on('click', function(){    
    $('ul.dropdown-menu li').removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
  });

})
;