document.getElementsByTagName('input')[0].addEventListener('keyup',
  function(e){
    var input = document.getElementsByTagName("input")[0].value;
    var ul = document.getElementsByTagName('ul')[0];
    if(e.keyCode == 13 && input != ""){
      var li = document.createElement('li');
      li.innerText = input;
      ul.insertBefore(li, document.getElementsByTagName('li')[0]);
      input.setAttribute('value',"");//не работает
  }
});
