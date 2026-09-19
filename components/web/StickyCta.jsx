import React from 'react';
import {Button} from '../core/Button.jsx';
/* StickyCta: one solid button fixed bottom-right; hides while any element matching hideWhen is in view. */
export function StickyCta({label='Solicitar plaza',href='#',hideWhen='footer,.fa-close',style}){
  const [hide,setHide]=React.useState(false);
  React.useEffect(()=>{const els=[...document.querySelectorAll(hideWhen)];if(!els.length)return;const seen=new Set();const io=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?seen.add(e.target):seen.delete(e.target));setHide(seen.size>0);},{threshold:.05});els.forEach(e=>io.observe(e));return()=>io.disconnect();},[hideWhen]);
  return <div style={{position:'fixed',right:'var(--sticky-cta-offset)',bottom:'var(--sticky-cta-offset)',zIndex:30,transition:'opacity .5s var(--ease),transform .5s var(--ease)',opacity:hide?0:1,transform:hide?'translateY(12px)':'none',pointerEvents:hide?'none':'auto',...style}}><Button variant="solid" href={href}>{label}</Button></div>;
}
