var photos = [];

$(document).on('ready', function(){
  $.ajax({
    url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1',
    type: 'GET',
    dataType: 'json'
  }).done(function(data) {
    photos = data['photos']['photo'];
    console.log('done');
    insertHtml(photos);
  });
});

function insertHtml(photos){
  for (var i = 0; i < photos.length; i++) {
    var url = 'https://farm' + photos[i].farm + '.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_' + photos[i].secret + '.jpg';
    $('.photos').append('<li class="photo-card"><img src="' + url + '" /></li>');
  }
}

