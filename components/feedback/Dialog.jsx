import React from 'react';
import {IconButton} from '../core/IconButton.jsx';
import {Icon} from '../core/Icon.jsx';
export function Dialog({open=false,onClose,title,eyebrow,children,actions,width=560,inverse=false,style}){
  const [shown,setShown]=React.useState(open);const [vis,setVis]=React.useState(false);
  React.useEffect(()=>{if(open){setShown(true);requestAnimationFrame(()=>requestAnimationFrame(()=>setVis(true)));}else{setVis(false);const t=setTimeout(()=>setShown(false),220);return()=>clearTimeout(t);}},[open]);
  React.useEffect(()=>{if(!open)return;const k=e=>{if(e.key==='Escape'&&onClose)onClose();};window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k);},[open,onClose]);
  if(!shown)return null;
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'var(--overlay)',display:'grid',placeItems:'center',padding:24,zIndex:1000,opacity:vis?1:0,transition:'opacity var(--dur-base) var(--ease)'}}>
    <div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:width,background:inverse?'var(--black)':'var(--white)',color:inverse?'var(--white)':'var(--black)',padding:40,position:'relative',transform:vis?'translateY(0)':'translateY(8px)',transition:'transform var(--dur-base) var(--ease)',borderRadius:0,...style}}>
      <div style={{position:'absolute',top:8,right:8}}><IconButton label="Cerrar" variant={inverse?'inverse':'ghost'} onClick={onClose}><Icon name="x"/></IconButton></div>
      {eyebrow&&<span style={{display:'block',font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',marginBottom:16}}>{eyebrow}</span>}
      {title&&<h2 style={{font:'var(--type-h2)',fontSize:32,textTransform:'uppercase',letterSpacing:'var(--tracking-display)',margin:'0 32px 20px 0'}}>{title}</h2>}
      <div style={{font:'var(--type-body)'}}>{children}</div>
      {actions&&<div style={{display:'flex',gap:12,marginTop:32,flexWrap:'wrap'}}>{actions}</div>}
    </div>
  </div>;
}