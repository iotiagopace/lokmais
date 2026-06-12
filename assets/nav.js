(function(){
  var ham=document.getElementById('ham');
  var mnav=document.getElementById('mnav');
  if(!ham||!mnav) return;
  function setOpen(open){
    mnav.classList.toggle('open',open);
    ham.classList.toggle('open',open);
    document.body.classList.toggle('mnav-lock',open);
    ham.setAttribute('aria-expanded',open);
  }
  ham.addEventListener('click',function(){
    setOpen(!mnav.classList.contains('open'));
  });
  mnav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){ setOpen(false); });
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') setOpen(false);
  });
})();
