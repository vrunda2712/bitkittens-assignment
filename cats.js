document.addEventListener('DOMContentLoaded',function() {
  var summonKitties = document.querySelector('.summon-cats');

  summonKitties.addEventListener('click',function(){
    $.ajax( {
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json',
    }).done(function(data) {

      catBox(data.cats[0], 1);
      catBox(data.cats[1], 2);
      catBox(data.cats[2], 3);
    });
  });
});

function catBox(cat, number) {
  // var selector = '#cat1.cat-box';
  var selector = '#cat' + number + '.cat-box';

  var catBox = document.querySelector(selector);
  var kittenPicSrc = cat.photo;
  var kittenPicName = cat.name;
  var img = document.createElement('img');
  img.src = kittenPicSrc;
  img.alt = kittenPicName;
  catBox.appendChild(img);
}
