document.getElementsByTagName('input')[0].addEventListener('keyup',
  function(e){
    var ul = document.getElementsByTagName('ul')[0];
    if(e.keyCode == 13 && this.value != ""){
      var li = document.createElement('li');
      li.innerText = this.value;
      ul.insertBefore(li, document.getElementsByTagName('li')[0]);
      this.value = "";
  }
});
