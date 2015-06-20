$(document).on('ready', function(){
  $('.filter-menu').on('click', function(e){
    e.preventDefault();
    $('section').toggleClass('open');
  })
});