$(function() {

	
	$(function() {
    $('.menu__icon').on('click', function() {
      $('.menu__icon').toggleClass('menu_state_open');
      $('.menu_mobile').toggleClass('menu_open');
    });
  });
  $(function() {
    $('.link_mobile').on('click', function() {
    	$('.menu__icon').removeClass('menu_state_open');
      $('.menu_mobile').removeClass('menu_open');
    });
  });

});
