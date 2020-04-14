$(document).ready(function(){
  console.log('il documento è pronto');


  // reference
  var dropDown = $('.primary-list .dropdown-li');
  var dropDwnLinks = dropDown.children('a');
  var dropDwnMenus = dropDown.children('.dropdown-menu');
  var arrow = $('.primary-list .icon');
  var arrowUp = arrow.children('sub');

  dropDwnLinks.mouseenter(function(){
    var actualMenu = $(this).next('.dropdown-menu');

    dropDwnMenus.not(actualMenu).hide();

    actualMenu.toggle();
  });

  arrow.click(function(){
    arrowUp.addClass('fas fa-chevron-up');
  });

});//ready
