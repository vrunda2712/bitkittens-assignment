document.addEventListener('DOMContentLoaded',function() {
  var summonKitties = document.querySelector('.summon-cats');

  summonKitties.addEventListener('click',function(){
    $.ajax( {
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json',
    }).done(function(data) {
      data.cats.forEach(catBox);
    });
  });
});

function catBox(cat, index) {
  var number = index + 1;
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
