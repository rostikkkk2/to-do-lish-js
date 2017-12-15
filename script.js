document.getElementsByTagName('input')[0].addEventListener('keyup',
  function(e){
    var input = document.getElementsByTagName("input")[0];
    var ul = document.getElementsByTagName('ul')[0];
    if(e.keyCode == 13 && input.value != ""){
      var li = document.createElement('li');
      li.innerText = input.value;
      ul.insertBefore(li, document.getElementsByTagName('li')[0]);
      input.value = "";
  }
});
