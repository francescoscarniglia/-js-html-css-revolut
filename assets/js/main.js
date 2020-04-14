$(document).ready(function(){
  console.log('il documento è pronto');


  // reference
  var dropDown = $('.primary-list .dropdown-li');
  var dropDwnLinks = dropDown.children('a');
  var dropDwnMenus = dropDown.children('.dropdown-menu');

  dropDwnLinks.click(function(){
    var actualMenu = $(this).next('.dropdown-menu');

    dropDwnMenus.not(actualMenu).hide();
    
    actualMenu.toggle();
  });

});//ready
