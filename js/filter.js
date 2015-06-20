$(document).on('ready', function(){
  $('.available').on('click', function(e){
    e.preventDefault();
    var filter = $(this).data('filter');
    $(this).addClass(filter);
  });
});