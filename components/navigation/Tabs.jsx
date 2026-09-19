import React from 'react';
export function Tabs({items=[],value,onChange,inverse=false,style}){
  const line=inverse?'var(--white)':'var(--black)';
  return <div role="tablist" style={{display:'flex',gap:32,borderBottom:'1px solid '+(inverse?'rgba(255,255,255,.3)':'var(--border-subtle)'),color:inverse?'var(--white)':'var(--black)',...style}}>
    {items.map(it=>{const active=it.id===value;return <button key={it.id} role="tab" aria-selected={active} disabled={it.disabled} onClick={()=>onChange&&onChange(it.id)} style={{all:'unset',cursor:it.disabled?'not-allowed':'pointer',padding:'12px 0 14px',marginBottom:-1,font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:it.disabled?'var(--fg-disabled)':'inherit',opacity:active||it.disabled?1:.55,borderBottom:'2px solid '+(active?line:'transparent'),transition:'opacity var(--dur-base) var(--ease)'}}>{it.label}</button>;})}
  </div>;
}