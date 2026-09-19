import React from 'react';
import {Button} from '../core/Button.jsx';
import {Logo} from '../core/Logo.jsx';
/* SiteNav: fixed bar. Transparent over the hero, solid black after 40px of scroll (stays). Logo · CTA button · "Menú" → full-screen black panel with the page list in Space Grotesk Light. links collapsed on every breakpoint. */
export const SITE_LINKS=[['Home','#'],['Openday','#'],['Máster Madrid','#'],['Máster Barcelona','#'],['Intensivos de verano','#'],['Online','#'],['Método FAMA','#'],['FAMA Academy','#'],['Blog','#'],['Contacto','#']];
export function SiteNav({links=SITE_LINKS,cta={label:'Solicitar plaza',href:'#'},solid,fixed=true,style}){
  const [scrolled,setScrolled]=React.useState(false);const [open,setOpen]=React.useState(false);
  React.useEffect(()=>{const f=()=>setScrolled(window.scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f);},[]);
  const dark=solid??scrolled;
  const lbl={font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'#fff',textDecoration:'none',cursor:'pointer',background:'none',border:0,padding:0};
  return <>
    <nav style={{position:fixed?'fixed':'relative',top:0,left:0,right:0,zIndex:40,display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,padding:'0 var(--page-margin)',height:dark?'var(--nav-h)':'var(--nav-h-hero)',background:dark?'#000':'transparent',borderBottom:dark?'1px solid var(--line-on-black)':'1px solid transparent',color:'#fff',transition:'height .5s var(--ease),background .5s var(--ease)',...style}}>
      <a href={links[0][1]} style={{display:'flex'}}><Logo variant="mark" inverse height={20}/></a>
      <div style={{display:'flex',alignItems:'center',gap:32}}>
        <Button variant="outline" inverse size="sm" href={cta.href}>{cta.label}</Button>
        <button onClick={()=>setOpen(o=>!o)} aria-expanded={open} style={lbl}>{open?'Cerrar':'Menú'}</button>
      </div>
    </nav>
    <div style={{position:'fixed',inset:0,zIndex:39,background:'#000',color:'#fff',display:'flex',flexDirection:'column',padding:'calc(var(--nav-h) + 48px) var(--page-margin) 48px',transform:open?'none':'translateY(-100%)',transition:'transform .8s cubic-bezier(.7,0,.2,1)',overflowY:'auto'}} aria-hidden={!open}>
      <ol style={{listStyle:'none',margin:0,padding:0,borderTop:'1px solid var(--line-on-black)'}}>
        {links.map(([t,h],i)=><li key={i} style={{borderBottom:'1px solid var(--line-on-black)'}}><a href={h} style={{display:'grid',gridTemplateColumns:'56px minmax(0,1fr)',gap:16,alignItems:'baseline',padding:'18px 0',color:'#fff',textDecoration:'none'}}><span style={{font:'var(--type-list-num)',letterSpacing:'.2em',color:'var(--gray-mid)'}}>{String(i+1).padStart(2,'0')}</span><span style={{font:'var(--type-menu-item)',textTransform:'uppercase',letterSpacing:'.04em'}}>{t}</span></a></li>)}
      </ol>
      <div style={{marginTop:'auto',display:'flex',justifyContent:'space-between',gap:24,paddingTop:32,font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--gray-mid)'}}><span>Madrid · Barcelona</span><span>© 2026 FAMA Academy</span></div>
    </div>
  </>;
}
