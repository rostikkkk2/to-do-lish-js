document.getElementsByTagName('input')[0].addEventListener('keyup',
  function(e){
    this.ul = document.getElementsByTagName('ul')[0];
    if(e.keyCode == 13 && this.value != ""){
      this.li = document.createElement('li');
      this.li.innerText = this.value;
      this.ul.insertBefore(this.li, document.getElementsByTagName('li')[0]);
      this.value = "";
  }
});
