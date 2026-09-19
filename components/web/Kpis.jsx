import React from 'react';
/* Kpis: 3–4 numbers in a hairline grid, number in Syne, label under it. */
export function Kpis({items=[],style,...rest}){
  return <div style={{display:'grid',gridTemplateColumns:'repeat('+items.length+',minmax(0,1fr))',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)',...style}} {...rest}>
    {items.map((k,i)=><div key={i} style={{padding:'40px 24px 40px 0',borderRight:i<items.length-1?'1px solid var(--line)':0}}>
      <b style={{display:'block',font:'var(--type-kpi)',textTransform:'uppercase',letterSpacing:'var(--tracking-display)'}}>{k.value}</b>
      <span style={{display:'block',marginTop:14,font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--fg-muted)'}}>{k.label}</span>
    </div>)}
  </div>;
}
