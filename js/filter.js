$(document).on('ready', function(){
  $('.filter').on('click', function(e){
    var self = $(this);
    e.preventDefault();
    var filter = self.data('filter');
    $('.photos').addClass(filter);
    var button = self.detach();
    $('.applied').append(button);
  });
});