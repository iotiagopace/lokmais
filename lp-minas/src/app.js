(() => {
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const plans=window.LP_PLANS;
const money=c=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(c/100);
const daily=p=>money(Math.round(p.weeklyCents/7));
const get=id=>plans.find(p=>p.id===id);
const duration=p=>p.months?`${p.months} meses`:`mínimo de ${p.days} dias`;
const label=p=>`${p.name} · ${p.model} · ${duration(p)}`;
const media={start:'{{motoStart}}',semi:'{{motoSemi}}',zero:'{{motoZero}}',fan:'{{motoFan}}'};
let mode='rental', selectedId='temp-semestral-start24', contactId=null;
const choices={rental:{model:'start24',id:selectedId},ownership:{model:'semi',id:'mm-semi-36'}};
function optionsFor(model) {return plans.filter(p=>p.mode===mode&&(mode==='rental'?p.id.endsWith(model):p.group===model));}
function renderOptions(model,preferredId) {
 const options=optionsFor(model);
 selectedId=options.some(p=>p.id===preferredId)?preferredId:options[0].id;
 choices[mode]={model,id:selectedId};
 $('#plan-options').innerHTML=options.map(p=>`<button class="plan-option" type="button" data-plan="${p.id}" aria-pressed="${p.id===selectedId}" aria-label="${p.name}, ${p.model}, ${duration(p)}, ${money(p.weeklyCents)} por semana, equivalente a ${daily(p)} por dia"><span><span class="term-name">${p.months?p.months+' meses':p.name}</span><span class="term-detail">${p.months?'Plano Minha Moto':'Mínimo '+p.days+' dias'}</span></span><span class="price-cell">${daily(p)}</span><span class="price-cell">${money(p.weeklyCents)}</span></button>`).join('');
 $$('[data-plan]').forEach(b=>b.addEventListener('click',()=>{selectedId=b.dataset.plan;choices[mode].id=selectedId;$$('[data-plan]').forEach(o=>o.setAttribute('aria-pressed',o===b));updateCosts();}));
 const image=model==='fan25'?media.fan:model==='zero'?media.zero:model==='semi'?media.semi:media.start;
 const photo=$('#plan-photo');photo.src=image;if(photo.animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches)photo.animate([{opacity:.6,transform:'translateX(12px)'},{opacity:1,transform:'translateX(0)'}],{duration:350,easing:'cubic-bezier(.16,1,.3,1)'});photo.alt=model==='fan25'?'Honda Fan 160, imagem ilustrativa':'Honda Start 160, imagem ilustrativa';
 $('#model-note').textContent=mode==='ownership'&&model==='semi'?'Start 2026 seminova, acima de 7 mil km. Foto ilustrativa.':'Foto ilustrativa. Ano, cor e configuração conforme a disponibilidade.';
 $('#model-fact').innerHTML=mode==='rental'?'<span>Aluguel temporário</span><p>Use a moto pelo período contratado, sem aquisição ao final.</p>':'<span>Plano Minha Moto</span><p>Opção de ficar com a moto ao final, conforme as condições do contrato.</p>';
 $('#plan-includes-text').textContent=mode==='rental'?'Manutenção preventiva, IPVA e proteção veicular. Troca de óleo não inclusa.':'Manutenção preventiva, duas trocas de óleo por mês, IPVA e proteção veicular. Caução de R$800.';
 updateCosts();
}
function updateCosts() {
 const p=get(selectedId);
 $('#sticky-plan-price').textContent=daily(p)+'/dia*';
 $('#sticky-weekly').textContent=money(p.weeklyCents)+' por semana';
 $('#cost-deposit').textContent=p.depositCents===null?'Confirmar por modelo':money(p.depositCents);
 $('#cost-initial').textContent=p.depositCents===null?'A confirmar':money(p.depositCents+p.weeklyCents);
 $('#cost-note').textContent=p.depositCents===null?'A unidade confirma a caução e o valor para começar antes da contratação.':'Estimativa sem promoção: primeira semana + caução. Confirme a regra e eventuais outras cobranças com a unidade.';
}
function setMode(next) {
 mode=next;
 $$('[data-mode]').forEach(b=>{const yes=b.dataset.mode===mode;b.setAttribute('aria-selected',yes);b.tabIndex=yes?0:-1;});
 $('#plan-panel').setAttribute('aria-labelledby','tab-'+mode);
 $('#plan-model').innerHTML=mode==='rental'?'<option value="start24">Start 160 · 2023/2024</option><option value="start25">Start 2025 · liga e disco</option><option value="fan25">Fan 2025</option>':'<option value="semi">Start 2026 seminova</option><option value="zero">Start 2026 0 km</option>';
 const c=choices[mode];$('#plan-model').value=c.model;renderOptions(c.model,c.id);
}
$$('[data-mode]').forEach(b=>{
 b.addEventListener('click',()=>setMode(b.dataset.mode));
 b.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();setMode(e.key==='Home'?'rental':e.key==='End'?'ownership':mode==='rental'?'ownership':'rental');$('#tab-'+mode).focus();}});
});
$$('[data-mode-link]').forEach(a=>a.addEventListener('click',()=>setMode(a.dataset.modeLink)));
$('#plan-model').addEventListener('change',e=>{const before=get(selectedId);const options=optionsFor(e.target.value);const next=mode==='rental'?options.find(p=>p.group===before.group):options[0];renderOptions(e.target.value,next?.id);});
function setContact(id) {
 contactId=id==='undecided'?null:id;
 $('#lead-interest').value=contactId||'undecided';
 $('#selected-plan-text').textContent=contactId?label(get(id)):'Quero ajuda para escolher meu plano';
 $('#selected-plan-price').textContent=contactId?`${money(get(id).weeklyCents)} por semana. Equivalente a ${daily(get(id))}/dia.`:'';
 $('#form-result').hidden=true;
}
$('#choose-plan').addEventListener('click',()=>{setContact(selectedId);$('#contato').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
const groups={ownership:document.createElement('optgroup'),rental:document.createElement('optgroup')};groups.ownership.label='Plano Minha Moto';groups.rental.label='Aluguel temporário';
plans.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=label(p);groups[p.mode].append(o);});
$('#lead-interest').append(groups.ownership,groups.rental);
$('#lead-interest').addEventListener('change',e=>setContact(e.target.value));
setMode('rental');
const phone=$('#lead-phone');
phone.addEventListener('input',()=>{phone.setCustomValidity('');phone.removeAttribute('aria-invalid');$('#phone-error').hidden=true;});
$('#lead-form').addEventListener('submit',e=>{
 e.preventDefault();let digits=phone.value.replace(/\D/g,'');if(digits.length>11&&digits.startsWith('55'))digits=digits.slice(2);
 if(!/^[1-9]{2}[2-9][0-9]{7,8}$/.test(digits)||/^(\d)\1+$/.test(digits)){$('#phone-error').hidden=false;phone.setAttribute('aria-invalid','true');phone.setCustomValidity('Informe um WhatsApp com DDD válido.');phone.reportValidity();phone.focus();return;}
 setContact($('#lead-interest').value);
 $('#form-result-plan').textContent=contactId?`${label(get(contactId))}. ${money(get(contactId).weeklyCents)} por semana.`:'Quero ajuda para escolher meu plano.';
 $('#form-result').hidden=false;
});
$('#reset-demo').addEventListener('click',()=>{$('#form-result').hidden=true;});

const gallery=$('.hero-gallery'), slides=$$('[data-slide]'), indicators=$$('[data-go-slide]');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let index=0,timer=null,userPaused=false,hovered=false,focused=false,inView=true;
const banners=[
 {city:'Belo Horizonte',plan:'temp-semestral-start24',action:'Escolher minha moto'},
 {city:'Contagem',plan:'mm-zero-33',action:'Conhecer o Minha Moto'},
 {city:'Santa Luzia',plan:'temp-semestral-fan25',action:'Quero minha moto'}
];
function showSlide(n){
 const previous=index;index=(n+slides.length)%slides.length;
 slides.forEach((s,i)=>{s.classList.toggle('is-active',i===index);s.setAttribute('aria-hidden',i!==index);});
 indicators.forEach((b,i)=>b.setAttribute('aria-pressed',i===index));
 $$('[data-message]').forEach((message,i)=>{message.hidden=i!==index;});
 const banner=banners[index],plan=get(banner.plan);
 $('#hero-city').textContent='em '+banner.city;
 $('#hero-daily').textContent=daily(plan);
 $('#hero-weekly').textContent=money(plan.weeklyCents)+' por semana';
 $('#hero-terms').textContent=plan.months?`${plan.model}. ${plan.months} meses. Caução de ${money(plan.depositCents)}.`:`${plan.model}. Semestral, mínimo de ${plan.days} dias.`;
 $('#hero-action').dataset.heroPlan=plan.id;
 $('#hero-action-label').textContent=banner.action;
 if(previous!==index&&!reduced.matches&&$('#hero-city').animate){
  [$('#hero-city'),$('.hero-messages')].forEach(element=>element.animate([{opacity:.45,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:380,easing:'cubic-bezier(.16,1,.3,1)'}));
 }
}
$('#hero-action').addEventListener('click',()=>{
 const p=get($('#hero-action').dataset.heroPlan),model=p.mode==='ownership'?p.group:p.id.split('-').at(-1);
 choices[p.mode]={model,id:p.id};setMode(p.mode);
});
function syncCarousel(){clearInterval(timer);timer=null;const shouldRun=!userPaused&&!hovered&&!focused&&!document.hidden&&inView&&!reduced.matches;if(shouldRun)timer=setInterval(()=>showSlide(index+1),6500);$('.hero').classList.toggle('is-still',!shouldRun);const pause=$('#slide-pause');pause.disabled=reduced.matches;pause.setAttribute('aria-pressed',userPaused||reduced.matches);pause.textContent=reduced.matches?'Pausado':userPaused?'Reproduzir':'Pausar';}
function go(n){showSlide(n);syncCarousel();}
$('#slide-prev').addEventListener('click',()=>go(index-1));$('#slide-next').addEventListener('click',()=>go(index+1));
indicators.forEach(b=>b.addEventListener('click',()=>go(Number(b.dataset.goSlide))));
$('#slide-pause').addEventListener('click',()=>{userPaused=!userPaused;syncCarousel();});
gallery.addEventListener('mouseenter',()=>{hovered=true;syncCarousel();});gallery.addEventListener('mouseleave',()=>{hovered=false;syncCarousel();});
gallery.addEventListener('focusin',()=>{focused=true;syncCarousel();});gallery.addEventListener('focusout',e=>{if(!gallery.contains(e.relatedTarget)){focused=false;syncCarousel();}});
document.addEventListener('visibilitychange',syncCarousel);reduced.addEventListener('change',syncCarousel);
if('IntersectionObserver' in window){new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncCarousel();},{threshold:.05}).observe(gallery);const reveals=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-revealed');reveals.unobserve(e.target);}});},{threshold:.12});$$('[data-reveal]').forEach(el=>reveals.observe(el));}
showSlide(0);
syncCarousel();
// O contato acompanha a leitura no celular e se recolhe ao chegar ao formulário.
const dock=$('#mobile-contact'),dockLink=$('#mobile-contact-link');
let heroActionVisible=true,formVisible=false,editingForm=false;
const protectedTitles=$$('main h2').filter(e=>!e.matches('[data-message]'));
function syncDock(){
 const dockHeight=dock.offsetHeight||100;
 const titleInDock=protectedTitles.some(title=>{const r=title.getBoundingClientRect();return r.height>0&&r.bottom>innerHeight-dockHeight-12&&r.top<innerHeight;});
 const visible=!heroActionVisible&&!formVisible&&!editingForm&&!titleInDock;
 dock.classList.toggle('is-visible',visible);dock.setAttribute('aria-hidden',!visible);dock.inert=!visible;dockLink.tabIndex=visible?0:-1;
}
if('IntersectionObserver' in window){
 new IntersectionObserver(entries=>{heroActionVisible=entries[0].isIntersecting;syncDock();},{threshold:0}).observe($('#hero-action'));
 new IntersectionObserver(entries=>{formVisible=entries[0].isIntersecting;syncDock();},{threshold:0,rootMargin:'0px 0px 100px 0px'}).observe($('#lead-form'));
}
let dockFrame=false;
window.addEventListener('scroll',()=>{if(!dockFrame){dockFrame=true;requestAnimationFrame(()=>{dockFrame=false;syncDock();});}},{passive:true});
window.addEventListener('resize',syncDock);
$('#lead-form').addEventListener('focusin',()=>{editingForm=true;syncDock();});
$('#lead-form').addEventListener('focusout',e=>{if(!$('#lead-form').contains(e.relatedTarget)){editingForm=false;syncDock();}});
dockLink.addEventListener('click',()=>{setContact(selectedId);});
})();
