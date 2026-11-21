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
let mode='ownership', selectedId='mm-semi-36', contactId='mm-semi-36';
const choices={rental:{model:'start24',id:'temp-semestral-start24'},ownership:{model:'semi',id:'mm-semi-36'}};
function optionsFor(model) {return plans.filter(p=>p.mode===mode&&(mode==='rental'?p.id.endsWith(model):p.group===model));}
function renderOptions(model,preferredId) {
 const options=optionsFor(model);
 $('#plan-model').value=model;
 selectedId=options.some(p=>p.id===preferredId)?preferredId:options[0].id;
 choices[mode]={model,id:selectedId};
 const lowest=Math.min(...options.map(p=>p.weeklyCents));
 $('#plan-options').innerHTML=options.map(p=>`<button class="plan-option" type="button" data-plan="${p.id}" aria-pressed="${p.id===selectedId}" aria-label="${p.name}, ${p.model}, ${duration(p)}, ${money(p.weeklyCents)} por semana, equivalente a ${daily(p)} por dia"><span class="term-choice"><span class="choice-mark" aria-hidden="true"></span><span><span class="term-name">${p.months?p.months+' meses':p.name}</span><span class="term-detail">${p.months?'Plano Minha Moto':'Mínimo '+p.days+' dias'}${p.weeklyCents===lowest?' · Menor valor por semana':''}</span></span></span><span class="price-cell">${money(p.weeklyCents)}</span></button>`).join('');
 $$('[data-plan]').forEach(b=>b.addEventListener('click',()=>{selectedId=b.dataset.plan;choices[mode].id=selectedId;$$('[data-plan]').forEach(o=>o.setAttribute('aria-pressed',o===b));updateCosts();}));
 const image=model==='fan25'?media.fan:model==='zero'?media.zero:model==='semi'?media.semi:media.start;
 const photo=$('#plan-photo');photo.src=image;if(photo.animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches)photo.animate([{opacity:.6,transform:'translateX(12px)'},{opacity:1,transform:'translateX(0)'}],{duration:350,easing:'cubic-bezier(.16,1,.3,1)'});photo.alt=model==='fan25'?'Honda Fan 160, imagem ilustrativa':'Honda Start 160, imagem ilustrativa';
 $('#model-note').textContent=mode==='ownership'&&model==='semi'?'Start 2026 seminova, acima de 7 mil km. Foto ilustrativa.':'Foto ilustrativa. Ano, cor e configuração conforme a disponibilidade.';
 $('#model-fact').innerHTML=mode==='rental'?'<strong>Uma moto para o seu momento.</strong><p>Alugue por 30, 90 ou 180 dias, com pagamento semanal.</p>':'<strong>Rode agora. Planeje ficar com ela.</strong><p>No Minha Moto, a aquisição ao final segue as condições do contrato.</p>';
 $('#plan-includes-text').textContent=mode==='rental'?'Manutenção preventiva, IPVA e proteção veicular. Troca de óleo não inclusa.':'Manutenção preventiva, duas trocas de óleo por mês, IPVA e proteção veicular. Caução de R$800.';
 renderModelChoices(model);
 updateCosts();
}
function renderModelChoices(active){
 const list=mode==='rental'?[['start24','Start 160','2023/2024',media.start],['start25','Start 2025','Liga e disco',media.start],['fan25','Fan 2025','Honda 160',media.fan]]:[['semi','Start seminova','2026 · acima de 7 mil km',media.semi],['zero','Start 0 km','2026',media.zero]];
 // V8: cartões de modelo sem preço; o valor aparece só nos prazos (passo 3), para não mostrar vários preços de uma vez.
 $('#model-options').innerHTML=list.map(([value,name,note,image])=>`<button type="button" class="model-card" data-model="${value}" aria-pressed="${value===active}" aria-label="${name}, ${note}"><img src="${image}" alt="" width="156" height="88" loading="lazy"><span class="model-card-copy"><strong>${name}</strong><span>${note}</span></span></button>`).join('');
 $$('[data-model]').forEach(button=>button.addEventListener('click',()=>{const before=get(selectedId),next=optionsFor(button.dataset.model),preferred=mode==='rental'?next.find(p=>p.group===before.group):next[0];renderOptions(button.dataset.model,preferred?.id);$('[data-model="'+button.dataset.model+'"]').focus({preventScroll:true});}));
}
function updateCosts() {
 const p=get(selectedId);
 $('#selected-model-name').textContent=p.model;
 $('#quote-weekly').textContent=money(p.weeklyCents);
 $('#quote-daily').textContent='Equivale a cerca de '+daily(p)+' por dia*';
 $('#quote-term').textContent=p.months?'Minha Moto · '+p.months+' meses':'Aluguel '+p.name.toLowerCase()+' · mínimo de '+p.days+' dias';
 $('#choose-plan-label').textContent=p.mode==='ownership'?'Quero meu plano Minha Moto':'Quero essa moto';
 $('#cost-initial').textContent=p.depositCents===null?'1ª semana de '+money(p.weeklyCents)+' + caução confirmada pela unidade':money(p.depositCents+p.weeklyCents)+' (1ª semana + caução de '+money(p.depositCents)+')';
 $('#cost-note').textContent=p.depositCents===null?'A caução do aluguel temporário é confirmada pela unidade antes da contratação.':'Estimativa sem promoção. Confirme a regra e eventuais outras cobranças com a unidade.';
 setContact(selectedId);
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
 b.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();setMode(e.key==='Home'?'ownership':e.key==='End'?'rental':mode==='rental'?'ownership':'rental');$('#tab-'+mode).focus();}});
});
$$('[data-mode-link]').forEach(a=>a.addEventListener('click',()=>setMode(a.dataset.modeLink)));
$('#plan-model').addEventListener('change',e=>{const before=get(selectedId);const options=optionsFor(e.target.value);const next=mode==='rental'?options.find(p=>p.group===before.group):options[0];renderOptions(e.target.value,next?.id);});
function setContact(id) {
 contactId=id==='undecided'?null:id;
 $('#lead-interest').value=contactId||'undecided';
 $('#selected-plan-text').textContent=contactId?label(get(id)):'Quero ajuda para escolher meu plano';
 $('#selected-plan-price').textContent=contactId?`${money(get(id).weeklyCents)} por semana. Equivalente a ${daily(get(id))}/dia.`:'';
 const quoted=get(contactId||selectedId);
 // V8: mesmo critério do comparador — semanal em destaque, diária como referência.
 $('#sticky-plan-price').textContent=money(quoted.weeklyCents)+'/semana';
 $('#sticky-weekly').textContent='cerca de '+daily(quoted)+' por dia';
 $('#form-result').hidden=true;
}
$('#choose-plan').addEventListener('click',()=>{setContact(selectedId);openInquiry();});
const groups={ownership:document.createElement('optgroup'),rental:document.createElement('optgroup')};groups.ownership.label='Plano Minha Moto';groups.rental.label='Aluguel temporário';
plans.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=label(p);groups[p.mode].append(o);});
$('#lead-interest').append(groups.ownership,groups.rental);
$('#lead-interest').addEventListener('change',e=>setContact(e.target.value));
setMode('ownership');
const phone=$('#lead-phone');
phone.addEventListener('input',()=>{phone.setCustomValidity('');phone.removeAttribute('aria-invalid');$('#phone-error').hidden=true;});
$('#lead-form').addEventListener('submit',e=>{
 e.preventDefault();
 if(!inquiryPanel.classList.contains('is-expanded')){openInquiry();return;}
 if(!$('#lead-form').reportValidity())return;
 let digits=phone.value.replace(/\D/g,'');if(digits.length>11&&digits.startsWith('55'))digits=digits.slice(2);
 if(!/^[1-9]{2}[2-9][0-9]{7,8}$/.test(digits)||/^(\d)\1+$/.test(digits)){$('#phone-error').hidden=false;phone.setAttribute('aria-invalid','true');phone.setCustomValidity('Informe um WhatsApp com DDD válido.');phone.reportValidity();phone.focus();return;}
 setContact($('#lead-interest').value);
 $('#form-result-plan').textContent=contactId?`${label(get(contactId))}. ${money(get(contactId).weeklyCents)} por semana.`:'Quero ajuda para escolher meu plano.';
 $('#form-result').hidden=false;
});
$('#reset-demo').addEventListener('click',()=>{$('#form-result').hidden=true;});

const gallery=$('.hero-gallery'), slides=$$('[data-slide]'), indicators=$$('[data-go-slide]');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let index=0,timer=null,cityTimer=null,cityIndex=0,cityAnimation=null,cityChanging=false,userPaused=false,hovered=false,focused=false,inView=true;
const cityNames=['Belo Horizonte','Contagem','Minas'];
async function rotateCity(){
 if(cityChanging||reduced.matches)return;cityChanging=true;const city=$('#hero-city');
 try{cityAnimation=city.animate([{transform:'translateY(0)',opacity:1},{transform:'translateY(-105%)',opacity:0}],{duration:200,easing:'cubic-bezier(.4,0,1,1)',fill:'forwards'});await cityAnimation.finished;cityIndex=(cityIndex+1)%cityNames.length;city.textContent='em '+cityNames[cityIndex];cityAnimation.cancel();cityAnimation=city.animate([{transform:'translateY(105%)',opacity:0},{transform:'translateY(0)',opacity:1}],{duration:360,easing:'cubic-bezier(.16,1,.3,1)'});await cityAnimation.finished;}catch{}finally{cityAnimation?.cancel();cityAnimation=null;cityChanging=false;}
}
const banners=[
 {plan:'mm-semi-36',action:'Conhecer o Minha Moto'},
 {plan:'mm-zero-33',action:'Conhecer o Minha Moto'},
 {plan:'temp-semestral-fan25',action:'Quero minha moto'}
];
function showSlide(n){
 const previous=index;index=(n+slides.length)%slides.length;
 slides.forEach((s,i)=>{s.classList.toggle('is-active',i===index);s.setAttribute('aria-hidden',i!==index);});
 indicators.forEach((b,i)=>b.setAttribute('aria-pressed',i===index));
 $$('[data-message]').forEach((message,i)=>{message.hidden=i!==index;});
 const banner=banners[index],plan=get(banner.plan);
 $('#hero-daily').textContent=daily(plan);
 $('#hero-weekly').textContent=money(plan.weeklyCents)+' por semana';
 $('#hero-terms').textContent=plan.months?`${plan.model}. ${plan.months} meses. Caução de ${money(plan.depositCents)}.`:`${plan.model}. Semestral, mínimo de ${plan.days} dias.`;
 $('#hero-action').dataset.heroPlan=plan.id;
 $('#hero-action-label').textContent=banner.action;
 if(previous!==index&&!reduced.matches&&$('#hero-city').animate){
  [$('.hero-messages')].forEach(element=>element.animate([{opacity:.45,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:380,easing:'cubic-bezier(.16,1,.3,1)'}));
 }
}
$('#hero-action').addEventListener('click',()=>{
 const p=get($('#hero-action').dataset.heroPlan),model=p.mode==='ownership'?p.group:p.id.split('-').at(-1);
 choices[p.mode]={model,id:p.id};setMode(p.mode);
});
function syncCarousel(){
 clearInterval(timer);timer=null;
 const canAnimate=!userPaused&&!document.hidden&&inView&&!reduced.matches;
 const canSlide=canAnimate&&!hovered&&!focused;
 if(canSlide)timer=setInterval(()=>showSlide(index+1),6500);
 // O foco ou o mouse nos banners não interrompem os nomes das cidades.
 if(canAnimate&&!cityTimer)cityTimer=setInterval(rotateCity,3000);
 if(!canAnimate){clearInterval(cityTimer);cityTimer=null;cityAnimation?.cancel();}
 $('.hero').classList.toggle('is-still',!canSlide);
 const pause=$('#slide-pause');pause.disabled=reduced.matches;pause.setAttribute('aria-pressed',userPaused||reduced.matches);pause.textContent=reduced.matches?'Pausado':userPaused?'Reproduzir':'Pausar';
 pause.setAttribute('aria-label',reduced.matches?'Animações pausadas':userPaused?'Reproduzir banners e cidades':'Pausar banners e cidades');
}
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
// V7: um único formulário compacto acompanha a página (cartão no desktop, barra no celular) e expande sob demanda.
// V7.1: aparece já no primeiro scroll (só fica fora de cena no topo da página, onde a abertura tem CTA próprio).
// No desktop, sobre o comparador, encolhe para a barra do título em vez de sumir, para não cobrir os preços.
const inquiryRail=$('#inquiry-rail'),inquiryPanel=$('#inquiry-panel'),inquiryToggle=$('#inquiry-toggle'),inquiryHeading=$('.inquiry-heading');
const inquiryNarrow=matchMedia('(max-width: 1099px)');
const SHOW_AFTER=80;
let atTop=scrollY<SHOW_AFTER,comparatorVisible=false;
function syncInquiry(){
 const expanded=inquiryPanel.classList.contains('is-expanded'),focusedInside=inquiryRail.contains(document.activeElement);
 inquiryToggle.setAttribute('aria-expanded',expanded);
 inquiryToggle.setAttribute('aria-label',expanded?'Recolher formulário':'Expandir formulário');
 $('#lead-submit').textContent=expanded?'Consultar esse plano':(inquiryNarrow.matches?'Quero alugar':'Continuar');
 const away=atTop&&!expanded&&!focusedInside;
 inquiryRail.classList.toggle('is-away',away);
 inquiryRail.inert=away;
 inquiryRail.classList.toggle('is-mini',comparatorVisible&&!inquiryNarrow.matches&&!expanded&&!focusedInside);
}
let scrollQueued=false;
addEventListener('scroll',()=>{if(scrollQueued)return;scrollQueued=true;requestAnimationFrame(()=>{scrollQueued=false;const next=scrollY<SHOW_AFTER;if(next!==atTop){atTop=next;syncInquiry();}});},{passive:true});
inquiryHeading.addEventListener('click',event=>{if(inquiryRail.classList.contains('is-mini')&&!inquiryToggle.contains(event.target))openInquiry();});
function setInquiryExpanded(expanded){inquiryPanel.classList.toggle('is-expanded',expanded);syncInquiry();}
function openInquiry(){setInquiryExpanded(true);$('#lead-name').focus({preventScroll:true});}
inquiryToggle.addEventListener('click',()=>setInquiryExpanded(!inquiryPanel.classList.contains('is-expanded')));
inquiryPanel.addEventListener('keydown',event=>{if(event.key==='Escape'&&inquiryPanel.classList.contains('is-expanded')){setInquiryExpanded(false);inquiryToggle.focus({preventScroll:true});}});
$$('a[href="#contato"]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();openInquiry();}));
inquiryNarrow.addEventListener('change',syncInquiry);
inquiryRail.addEventListener('focusout',()=>setTimeout(syncInquiry,0));
if('IntersectionObserver' in window){
 const comparator=$('#plan-panel');if(comparator)new IntersectionObserver(([entry])=>{comparatorVisible=entry.isIntersecting;syncInquiry();},{rootMargin:'-30% 0px -30% 0px'}).observe(comparator);
}
syncInquiry();
})();
