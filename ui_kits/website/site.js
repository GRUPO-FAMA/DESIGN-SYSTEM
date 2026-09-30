/* Shared behaviour for FAMA v2 pages: curtain, reveal, fit Syne headlines to their column */
function fitHeads(){document.querySelectorAll('[data-fit]').forEach(h=>{const max=+h.dataset.fit,min=16;const p=h.parentElement,cs=getComputedStyle(p);let box=p.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);
// never wider than the visible column: viewport minus the heading's left edge and the same right margin
const vw=document.documentElement.clientWidth,hl=h.getBoundingClientRect().left,mR=Math.max(hl-(p.getBoundingClientRect().left-parseFloat(cs.paddingLeft)),0)>0?Math.min(hl,vw*.1):vw*.1;const vis=vw-Math.max(hl,0)-Math.min(Math.max(hl,16),vw*.1);if(vis>0)box=Math.min(box,vis);if(box<=0)return;const single=getComputedStyle(h).whiteSpace==='nowrap';
// measure the heading itself (clone, nowrap, real child markup such as .fama spans) instead of a probe with inherited font
const clone=h.cloneNode(true);clone.removeAttribute('data-fit');clone.style.cssText='position:absolute;visibility:hidden;white-space:nowrap;left:0;top:0;width:auto;max-width:none';if(!single){const words=h.textContent.trim().split(/\s+/);clone.textContent=words.reduce((a,b)=>b.length>a.length?b:a,'');}p.appendChild(clone);let s=max;clone.style.fontSize=s+'px';while(s>min&&clone.getBoundingClientRect().width>box){s-=2;clone.style.fontSize=s+'px';}clone.remove();h.style.setProperty('font-size',s+'px','important');
// safety: if any word still overflows the real box (late fonts, iOS), keep shrinking
{let g=0;while(s>min&&h.scrollWidth>h.clientWidth+1&&g++<60){s-=2;h.style.setProperty('font-size',s+'px','important');}}
// wrapped headlines: never more than 3 lines (mobile/tablet)
if(!single){const lh=parseFloat(getComputedStyle(h).lineHeight)||s*.9;let guard=0;while(s>min&&h.getBoundingClientRect().height>lh*3.2&&guard++<40){s-=2;h.style.setProperty('font-size',s+'px','important');}}});}
fitHeads();addEventListener('resize',fitHeads);addEventListener('load',fitHeads);document.fonts&&document.fonts.ready.then(fitHeads);document.fonts&&document.fonts.addEventListener&&document.fonts.addEventListener('loadingdone',fitHeads);setTimeout(fitHeads,600);setTimeout(fitHeads,1800);
const curtain=document.getElementById('curtain');if(curtain)setTimeout(()=>curtain.classList.add('up'),1300);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.r').forEach((el,i)=>{el.style.transitionDelay=(i%3)*100+'ms';io.observe(el)});

// nav: solid black after the hero, hide on scroll down, show on scroll up
(()=>{const nav=document.querySelector('nav');if(!nav)return;let last=0;const on=()=>{const y=scrollY;nav.classList.toggle('scrolled',y>40);last=y;};on();addEventListener('scroll',on,{passive:true});})();

// sticky CTA (mobile): visible after the hero, hidden while #convocatorias is in view
(()=>{const c=document.querySelector('.sticky-cta');if(!c)return;document.body.classList.add('has-cta');const target=document.querySelector(c.dataset.hide||'#convocatorias');let inView=false;if(target){new IntersectionObserver(es=>{inView=es[0].isIntersecting;upd();},{threshold:0}).observe(target);}const upd=()=>c.classList.toggle('show',scrollY>innerHeight*0.8&&!inView);addEventListener('scroll',upd,{passive:true});upd();})();

if(document.querySelector('.title.nohero'))document.body.classList.add('nohero');

// section heads (no data-fit): start from the CSS size, shrink only if a word overflows its column
function fitSectionHeads(){document.querySelectorAll('.head h2:not([data-fit]),.head .h2:not([data-fit]),h2.stmt:not([data-fit]),.close h2:not([data-fit]),h2.sy:not([data-fit])').forEach(h=>{h.style.removeProperty('font-size');let s=parseFloat(getComputedStyle(h).fontSize);let g=0;while(s>16&&h.scrollWidth>h.clientWidth+1&&g++<80){s-=1;h.style.setProperty('font-size',s+'px','important');}});}
fitSectionHeads();addEventListener('resize',fitSectionHeads);addEventListener('load',fitSectionHeads);document.fonts&&document.fonts.ready.then(fitSectionHeads);setTimeout(fitSectionHeads,600);setTimeout(fitSectionHeads,1800);
