import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Toast({open=true,message,action,onAction,onClose,position='bottom-left',fixed=true,style}){
  const [vis,setVis]=React.useState(false);
  React.useEffect(()=>{if(open){const r=requestAnimationFrame(()=>setVis(true));return()=>cancelAnimationFrame(r);}setVis(false);},[open]);
  if(!open&&!vis)return null;
  const pos=fixed?{position:'fixed',zIndex:900,[position.includes('bottom')?'bottom':'top']:24,[position.includes('right')?'right':'left']:24}:{};
  return <div role="status" style={{...pos,display:'inline-flex',alignItems:'center',gap:24,minHeight:48,padding:'12px 16px 12px 20px',background:'var(--black)',color:'var(--white)',font:'var(--type-small)',maxWidth:420,opacity:vis&&open?1:0,transform:vis&&open?'translateY(0)':'translateY(8px)',transition:'opacity var(--dur-base) var(--ease),transform var(--dur-base) var(--ease)',borderRadius:0,...style}}>
    <span style={{flex:1}}>{message}</span>
    {action&&<button type="button" onClick={onAction} style={{all:'unset',cursor:'pointer',font:'var(--type-button)',textTransform:'uppercase',letterSpacing:'0.12em',textDecoration:'underline',textUnderlineOffset:4}}>{action}</button>}
    {onClose&&<button type="button" aria-label="Cerrar" onClick={onClose} style={{all:'unset',cursor:'pointer',display:'flex'}}><Icon name="x" size={16}/></button>}
  </div>;
}