/* Shared chrome for FAMA v2 pages: nav + footer injected into #nav / #footer placeholders */
(function(){
const L='../../assets/logo/svg/';
const nav=`<a href="Home.html"><img src="${L}fama-academy-mark-white.svg" alt="FAMA Academy" style="height:20px"></a><ul class="lbl"><li><a href="MasterMadrid.html">Máster</a></li><li><a href="MetodoFama.html">Método FAMA</a></li><li><a href="https://models.famaacademy.es/">Modelos</a></li><li><a href="Online.html">Online</a></li><li><a href="Contacto.html">Contacto</a></li></ul><div class="navr"><a class="btn navbtn" href="{{cta}}">{{ctaLabel}}</a><button class="menubtn lbl" type="button" aria-label="Menú"><span class="mb-word">Menú</span><span class="mb-lines" aria-hidden="true"><i></i><i></i></span></button></div>`;
const panel=`<div class="menu" id="menu"><div class="menuhead"><img src="${L}fama-academy-mark-white.svg" alt="FAMA Academy" style="height:20px"><button class="menubtn lbl" type="button" aria-label="Cerrar">Cerrar</button></div><ul><li><a href="Home.html">Inicio</a></li><li><a href="MasterMadrid.html">Máster · Madrid</a></li><li><a href="MasterBarcelona.html">Máster · Barcelona</a></li><li><a href="IntensivoVerano.html">Intensivos de verano</a></li><li><a href="Openday.html">Openday</a></li><li><a href="Online.html">Online</a></li><li><a href="Contacto.html">Contacto</a></li><li><a href="Blog.html">Blog</a></li><li><a href="MetodoFama.html">Método FAMA</a></li><li><a href="FamaAcademy.html">FAMA Academy</a></li><li><a href="https://models.famaacademy.es/">Modelos</a></li></ul><div class="menufoot lbl dim"><span>Madrid · Barcelona</span><a href="https://www.instagram.com/famaacademy">Instagram</a></div></div>`;
const foot=`<div class="cols r">
<div><span class="lbl dim">Explora</span><ul><li><a href="MetodoFama.html">Método FAMA</a></li><li><a href="FamaAcademy.html">FAMA Academy</a></li><li><a href="Blog.html">Blog</a></li><li><a href="Contacto.html">Contacto</a></li><li><a href="Faq.html">Preguntas frecuentes</a></li><li><a href="EscuelaMadrid.html">Escuela de modelos en Madrid</a></li></ul></div>
<div><span class="lbl dim">Recursos</span><ul><li><a href="ComoSerModelo.html">Cómo ser modelo</a></li><li><a href="Castings.html">Castings</a></li><li><a href="Autoestima.html">Autoestima y confianza</a></li><li><a href="Padres.html">Para padres</a></li><li><a href="CursoCasting.html">Curso online de Casting</a></li><li><a href="CursoPosado.html">Curso online de Posado</a></li></ul></div>
<div><span class="lbl dim">Legal</span><ul><li><a href="AvisoLegal.html">Aviso legal</a></li><li><a href="Privacidad.html">Política de privacidad</a></li><li><a href="Cookies.html">Política de cookies</a></li><li><a href="CondicionesGenerales.html">Condiciones generales</a></li></ul></div>
<div><span class="lbl dim">Grupo</span><ul><li><a href="https://famamanagement.com/">FAMA Management</a></li><li><a href="https://famaspaces.es/">FAMA Spaces</a></li><li><a href="https://famaacademy.es">FAMA Academy</a></li><li><a href="https://famaagency.es">FAMA Agency</a></li></ul></div>
<div><span class="lbl dim">RRSS</span><ul><li><a href="https://www.instagram.com/famaacademy">Instagram</a></li><li><a href="https://www.tiktok.com/@famaacademy">Tiktok</a></li><li><a href="https://www.youtube.com/@famaacademy_escuelamodelos/">Youtube</a></li></ul></div>
</div>
<div class="bottom"><img src="${L}fama-academy-mark-white.svg" alt="FAMA Academy"><span>© 2026 FAMA Academy. Madrid · Barcelona.</span></div>`;
const n=document.getElementById('nav');if(n&&n.dataset.minimal){n.className='wrap';n.innerHTML='<a href="Home.html"><img src="'+L+'fama-academy-mark-white.svg" alt="FAMA Academy" style="height:20px"></a><span class="lbl" style="color:#D0D0D0">'+(n.dataset.label||'Admisión · Máster Modelo Profesional')+'</span>';}else if(n){n.className='wrap';n.innerHTML=nav.replace('{{cta}}',n.dataset.cta||'MasterMadrid.html#convocatorias').replace('{{ctaLabel}}',n.dataset.label||'Solicitar plaza');n.insertAdjacentHTML('afterend',panel);const menu=document.getElementById('menu');const nb=n.querySelector('.menubtn');const setOpen=o=>{menu.classList.toggle('open',o);document.documentElement.classList.toggle('menu-open',o);document.body.style.overflow=o?'hidden':'';nb.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú');nb.setAttribute('aria-expanded',o);};nb.setAttribute('aria-controls','menu');nb.setAttribute('aria-expanded','false');nb.addEventListener('click',()=>setOpen(!menu.classList.contains('open')));menu.querySelectorAll('.menuhead .menubtn').forEach(b=>b.addEventListener('click',()=>setOpen(false)));addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});menu.querySelectorAll('ul a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));}
const f=document.getElementById('footer');if(f&&f.dataset.minimal){f.className='band';f.style.paddingTop='0';f.innerHTML='<div class="bottom" style="border-top:1px solid rgba(255,255,255,.18)"><img src="'+L+'fama-academy-mark-white.svg" alt="FAMA Academy"><span class="lbl dim" style="display:flex;gap:24px;flex-wrap:wrap"><a href="CondicionesGenerales.html">Condiciones generales</a><a href="Privacidad.html">Privacidad</a><a href="mailto:hola@famaacademy.es">hola@famaacademy.es</a></span></div>';}else if(f){f.className='band';f.style.paddingTop='0';f.innerHTML=foot;}
})();

;(()=>{const v=new URLSearchParams(location.search).get('menu')||localStorage.getItem('fama-menu')||'2';localStorage.setItem('fama-menu',v);document.documentElement.dataset.menu=v;})();

/* WhatsApp · María (agente IA). Todo «Solicitar plaza» abre su chat con mensaje + referencia de origen. */
;(()=>{
const WA='34678210334';
const page=(location.pathname.split('/').pop()||'Home.html').replace('.html','')||'Home';
if(/^Admision/.test(page))return; // admisión = pago directo, no se toca
const course={MasterMadrid:'el Máster Modelo Profesional en Madrid',MasterBarcelona:'el Máster Modelo Profesional en Barcelona',IntensivoVerano:'el Intensivo de verano',EscuelaMadrid:'el Máster Modelo Profesional en Madrid'}[page]||'el Máster Modelo Profesional';
const code=p=>'WEB-'+page.toUpperCase()+'-'+p;
const where=a=>a.closest('nav')?'MENU':a.closest('.slot,.slots,#convocatorias')?'CONVOCATORIA':a.closest('.close')?'CIERRE':a.closest('.title,.hero')?'PORTADA':'CUERPO';
const group=a=>{const s=a.closest('.slot');if(!s)return '';const cl=x=>{const k=x.cloneNode(true);k.querySelectorAll('br').forEach(b=>b.replaceWith(' '));k.querySelectorAll('*').forEach(e=>{if(getComputedStyle(x).display)e.insertAdjacentText('beforebegin',' ')});return k.textContent.replace(/\s+/g,' ').trim();};const t=[...s.querySelectorAll('h3,.when')].map(cl).filter(Boolean).join(' · ');return t?' Grupo: '+t+'.':'';};
const link=a=>{const p=where(a);const txt='Hola María, vengo de la web de FAMA Academy y quiero solicitar plaza en '+course+'.'+group(a)+' (Ref: '+code(p)+')';return {href:'https://wa.me/'+WA+'?text='+encodeURIComponent(txt),ref:code(p)};};
const apply=()=>document.querySelectorAll('a').forEach(a=>{if(a.dataset.wa||!/solicitar plaza/i.test(a.textContent))return;const {href,ref}=link(a);a.href=href;a.target='_blank';a.rel='noopener';a.dataset.wa=ref;a.addEventListener('click',()=>{(window.dataLayer=window.dataLayer||[]).push({event:'whatsapp_click',wa_agent:'maria',wa_ref:ref,page});if(window.gtag)gtag('event','whatsapp_click',{wa_ref:ref,page});});});
apply();document.readyState!=='complete'&&addEventListener('load',apply);
})();

/* Descargar programa → modal con formulario HubSpot (popup «Descubre el programa» de la web actual) */
;(()=>{
const HS={region:'eu1',portalId:'144947918',formId:'f3c5b77a-e721-4325-a6d2-3228a750f7b6'}; // ← rellenar con los IDs del formulario de HubSpot (Marketing → Formularios → Compartir → Insertar)
const page=(location.pathname.split('/').pop()||'').replace('.html','');
const course={MasterMadrid:'Máster Modelo Profesional · Madrid',MasterBarcelona:'Máster Modelo Profesional · Barcelona',IntensivoVerano:'Intensivo de verano · Madrid'}[page]||'Máster Modelo Profesional';
const btns=[...document.querySelectorAll('a')].filter(a=>/descargar programa/i.test(a.textContent)||a.getAttribute('href')==='#programa-form');if(!btns.length)return;
document.body.insertAdjacentHTML('beforeend',`<div class="pmodal" id="pmodal" role="dialog" aria-modal="true" aria-labelledby="pm-t" hidden><div class="pm-back" data-close></div><div class="pm-card"><button class="pm-x" type="button" aria-label="Cerrar" data-close><span class="mb-lines" aria-hidden="true"><i></i><i></i></span></button><span class="lbl dim">${course}</span><h2 class="syne" id="pm-t">Descubre el programa</h2><p class="pm-sub">Déjanos tus datos y te lo enviamos al momento.</p><div class="pm-form" id="pm-form"></div></div></div>`);
const m=document.getElementById('pmodal'),box=document.getElementById('pm-form');let loaded=false;
const load=()=>{if(loaded)return;loaded=true;
 box.innerHTML=`<form class="pf" novalidate>
 <div class="pf-row"><label class="pf-f"><span>Nombre*</span><input name="firstname" autocomplete="given-name" required></label><label class="pf-f"><span>Apellidos*</span><input name="lastname" autocomplete="family-name" required></label></div>
 <div class="pf-row"><label class="pf-f"><span>Correo*</span><input name="email" type="email" autocomplete="email" required></label><label class="pf-f"><span>Número de teléfono*</span><span class="pf-tel"><select name="prefix" aria-label="Prefijo"><option value="+34">+34</option><option value="+351">+351</option><option value="+33">+33</option><option value="+39">+39</option><option value="+44">+44</option><option value="+49">+49</option><option value="+1">+1</option><option value="+52">+52</option><option value="+57">+57</option><option value="+58">+58</option><option value="+54">+54</option><option value="+51">+51</option><option value="+56">+56</option><option value="+593">+593</option></select><input name="phone" type="tel" autocomplete="tel-national" inputmode="tel" required></span></label></div>
 <label class="pf-f"><span>¿En qué país vives ahora?*</span><select name="country" required><option value="" disabled selected>Selecciona</option><option>España</option><option>Andorra</option><option>Portugal</option><option>Francia</option><option>Italia</option><option>Reino Unido</option><option>Alemania</option><option>Suiza</option><option>Estados Unidos</option><option>México</option><option>Colombia</option><option>Venezuela</option><option>Argentina</option><option>Perú</option><option>Chile</option><option>Ecuador</option><option>Uruguay</option><option>Paraguay</option><option>Bolivia</option><option>República Dominicana</option><option>Cuba</option><option>Otro país</option></select></label>
 <label class="pf-check"><input type="checkbox" name="consent" required><span>Acepto recibir comunicaciones de FAMA Academy*</span></label>
 <p class="pf-legal">FAMA Academy necesita tu información de contacto para enviarte el programa. Consulta la <a href="PoliticaPrivacidad.html">política de privacidad</a>.</p>
 <p class="pf-err" role="alert" hidden></p>
 <button class="btn solid pf-btn" type="submit">Descargar</button>
 </form><div class="pf-ok" hidden><span class="lbl dim">Enviado</span><p>Te hemos enviado el programa a tu correo.</p><a class="btn" href="${location.pathname.includes('Barcelona')?'AdmisionBarcelona.html':'MasterMadrid.html#convocatorias'}">Ver convocatorias</a></div>`;
 const f=box.querySelector('form'),err=box.querySelector('.pf-err');
 f.addEventListener('submit',async e=>{e.preventDefault();err.hidden=true;
  const bad=[...f.querySelectorAll('[required]')].filter(i=>i.type==='checkbox'?!i.checked:!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value)));
  f.querySelectorAll('.pf-f,.pf-check').forEach(x=>x.classList.remove('bad'));bad.forEach(i=>i.closest('.pf-f,.pf-check').classList.add('bad'));
  if(bad.length){err.textContent='Revisa los campos marcados.';err.hidden=false;bad[0].focus();return;}
  const d=Object.fromEntries(new FormData(f));const btn=f.querySelector('button');btn.disabled=true;btn.textContent='Enviando…';
  const hutk=(document.cookie.match(/hubspotutk=([^;]+)/)||[])[1];
  const body={fields:[{name:'firstname',value:d.firstname.trim()},{name:'lastname',value:d.lastname.trim()},{name:'email',value:d.email.trim()},{name:'phone',value:d.prefix+' '+d.phone.trim()},{name:'pais_de_residencia',value:d.country},{name:'consentimiento_envio_de_whatsaap',value:'true'}],
   context:Object.assign({pageUri:location.href,pageName:document.title},hutk?{hutk}:{}),
   legalConsentOptions:{consent:{consentToProcess:true,text:'Acepto recibir comunicaciones de FAMA Academy'}}};
  try{const r=await fetch('https://api-'+HS.region+'.hsforms.com/submissions/v3/integration/submit/'+HS.portalId+'/'+HS.formId,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
   if(!r.ok){const j=await r.json().catch(()=>({}));console.warn('HubSpot',j);throw new Error((j.errors&&j.errors[0]&&j.errors[0].message)||r.status);}
   const j=await r.json().catch(()=>({}));const ok=box.querySelector('.pf-ok');if(j.redirectUri){const a=ok.querySelector('.btn');a.href=j.redirectUri;a.textContent='Agenda tu llamada de admisión';a.classList.add('solid');a.target='_blank';a.rel='noopener';}f.hidden=true;ok.hidden=false;(window.dataLayer=window.dataLayer||[]).push({event:'programa_form_submit',page});
  }catch(x){err.textContent='No se ha podido enviar. Inténtalo de nuevo o llámanos al 919 49 32 53.';err.hidden=false;btn.disabled=false;btn.textContent='Descargar';}
 });};
const open=e=>{e.preventDefault();load();m.hidden=false;requestAnimationFrame(()=>m.classList.add('on'));document.body.style.overflow='hidden';(window.dataLayer=window.dataLayer||[]).push({event:'programa_open',page});};
const close=()=>{m.classList.remove('on');document.body.style.overflow='';setTimeout(()=>m.hidden=true,450);};
btns.forEach(a=>{a.setAttribute('href','#programa-form');a.addEventListener('click',open);});
m.querySelectorAll('[data-close]').forEach(x=>x.addEventListener('click',close));addEventListener('keydown',e=>{if(e.key==='Escape'&&!m.hidden)close();});
})();
