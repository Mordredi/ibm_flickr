$(document).on('ready', function(){
  $('.filter').on('click', function(e){
    var self = $(this);
    e.preventDefault();
    var filter = self.data('filter');
    if (filter === 'odd' && $('.photos').hasClass('even')) {
      $('.photos').removeClass('even');
      var button = $('.filter[data-filter="even"]').detach();
      $('.available').append(button);
    } else if (filter === 'even' && $('.photos').hasClass('odd')) {
      $('.photos').removeClass('odd');
      var button = $('.filter[data-filter="odd"]').detach();
      $('.available').append(button);
    }

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