document.getElementsByTagName('input')[0].addEventListener('keyup',
  function(x){
    var input = document.getElementsByTagName("input")[0].value;
    if(x.keyCode == 13 && input != ""){
      var li = document.createElement('li');
      li.innerText = input;
      document.getElementsByTagName('ul')[0]
      .insertBefore(li, document.getElementsByTagName('li')[0]);
      document.getElementsByTagName("input")[0].value = "";//input.value = "" НЕ работает
         }
});
