$(document).on('ready', function(){
  $('.filter').on('click', function(e){
    var self = $(this);
    e.preventDefault();
    var filter = self.data('filter');
    if ($('.photos').hasClass(filter)) {
      $('.photos').removeClass(filter);
      var button = self.detach();
      $('.available').append(button);
    } else {
      $('.photos').addClass(filter);
      var button = self.detach();
      $('.applied').append(button);
    }
  });
});