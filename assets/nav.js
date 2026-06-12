(function(){
  var ham=document.getElementById('ham');
  var mnav=document.getElementById('mnav');
  var close=document.getElementById('mnav-close');
  var bar=document.getElementById('mcta');

  function setOpen(open){
    if(!mnav) return;
    mnav.classList.toggle('open',open);
    if(ham) ham.setAttribute('aria-expanded',open);
    document.body.classList.toggle('mnav-lock',open);
  }
  if(ham) ham.addEventListener('click',function(){ setOpen(!mnav.classList.contains('open')); });
  if(close) close.addEventListener('click',function(){ setOpen(false); });
  if(mnav){
    mnav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ setOpen(false); }); });
  }
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') setOpen(false); });

  // Sticky bottom CTA: show after 220px scroll
  if(bar){
    var ticking=false;
    function onScroll(){
      if(ticking) return;
      ticking=true;
      requestAnimationFrame(function(){
        bar.classList.toggle('show', window.scrollY > 220);
        ticking=false;
      });
    }
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }
})();
