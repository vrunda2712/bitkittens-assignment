document.addEventListener('DOMContentLoaded',function() {
  var summonKitties = document.querySelector('.summon-cats');

  summonKitties.addEventListener('click',function(){
    $.ajax( {
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json',
    });
  });
});
