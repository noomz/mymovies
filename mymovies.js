$(document).ready(function () {
  $('a.movie-flag').click(function (e) {
    e.preventDefault();
    var obj = $(this);
    $.getJSON($(this).attr('href'), {}, function (data) {
      if (data.status == 'ok') {
        if (obj.text() == 'Watched') {
          obj.text('Unwatched');
        }
        else if (obj.text() == 'Unwatched') {
          obj.text('Watched');
        }
        else if (obj.text() == 'Owned') {
          obj.text('Unowned');
        }
        else if (obj.text() == 'Unowned') {
          obj.text('Owned');
        }
      }
    });
  });
});
