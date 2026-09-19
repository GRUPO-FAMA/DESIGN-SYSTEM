/* Shared behaviour for FAMA v2 pages: curtain, reveal, fit Syne headlines to their column */
function fitHeads(){document.querySelectorAll('[data-fit]').forEach(h=>{const max=+h.dataset.fit,min=16;const p=h.parentElement,cs=getComputedStyle(p);const box=p.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);if(box<=0)return;const single=getComputedStyle(h).whiteSpace==='nowrap';
// measure the heading itself (clone, nowrap, real child markup such as .fama spans) instead of a probe with inherited font
const clone=h.cloneNode(true);clone.removeAttribute('data-fit');clone.style.cssText='position:absolute;visibility:hidden;white-space:nowrap;left:0;top:0;width:auto;max-width:none';if(!single){const words=h.textContent.trim().split(/\s+/);clone.textContent=words.reduce((a,b)=>b.length>a.length?b:a,'');}p.appendChild(clone);let s=max;clone.style.fontSize=s+'px';while(s>min&&clone.getBoundingClientRect().width>box){s-=2;clone.style.fontSize=s+'px';}clone.remove();h.style.fontSize=s+'px';
// wrapped headlines: never more than 3 lines (mobile/tablet)
if(!single){const lh=parseFloat(getComputedStyle(h).lineHeight)||s*.9;let guard=0;while(s>min&&h.getBoundingClientRect().height>lh*3.2&&guard++<40){s-=2;h.style.fontSize=s+'px';}}});}
fitHeads();addEventListener('resize',fitHeads);document.fonts&&document.fonts.ready.then(fitHeads);
const curtain=document.getElementById('curtain');if(curtain)setTimeout(()=>curtain.classList.add('up'),1300);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.r').forEach((el,i)=>{el.style.transitionDelay=(i%3)*100+'ms';io.observe(el)});

// nav: solid black after the hero, hide on scroll down, show on scroll up
(()=>{const nav=document.querySelector('nav');if(!nav)return;let last=0;const on=()=>{const y=scrollY;nav.classList.toggle('scrolled',y>40);last=y;};on();addEventListener('scroll',on,{passive:true});})();

// sticky CTA (mobile): visible after the hero, hidden while #convocatorias is in view
(()=>{const c=document.querySelector('.sticky-cta');if(!c)return;document.body.classList.add('has-cta');const target=document.querySelector(c.dataset.hide||'#convocatorias');let inView=false;if(target){new IntersectionObserver(es=>{inView=es[0].isIntersecting;upd();},{threshold:0}).observe(target);}const upd=()=>c.classList.toggle('show',scrollY>innerHeight*0.8&&!inView);addEventListener('scroll',upd,{passive:true});upd();})();

if(document.querySelector('.title.nohero'))document.body.classList.add('nohero');
