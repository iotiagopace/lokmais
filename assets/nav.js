(function(){
  var ham=document.getElementById('ham');
  var mnav=document.getElementById('mnav');
  if(!ham||!mnav) return;
  ham.addEventListener('click',function(){
    var open=mnav.classList.toggle('open');
    ham.classList.toggle('open',open);
    ham.setAttribute('aria-expanded',open);
  });
  document.addEventListener('click',function(e){
    if(!ham.contains(e.target)&&!mnav.contains(e.target)){
      mnav.classList.remove('open');
      ham.classList.remove('open');
      ham.setAttribute('aria-expanded','false');
    }
  });
})();
