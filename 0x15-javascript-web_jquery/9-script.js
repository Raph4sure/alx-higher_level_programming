#JavaScript script that fetches from https://fourtonfish.com/hellosalut/?lang=fr and displays the value of hello from that fetch in the HTML tag DIV#hello

$(document).ready(function () {
  $.getJSON('https://swapi.co/api/films/?format=json', function (data) {
    $.each(data.results, function (index, value) {
      $('UL#list_movies').append('<li>' + value.title + '</li>');
    });
  });
});
