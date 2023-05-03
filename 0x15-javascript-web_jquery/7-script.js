#JavaScript script that fetches the character name from this URL: https://swapi-api.alx-tools.com/api/people/5/?format=json

$('document').ready(function () {
  $.getJSON('https://swapi.co/api/people/5/?format=json', function (value) {
    $('DIV#character').text(value.name);
  });
});
