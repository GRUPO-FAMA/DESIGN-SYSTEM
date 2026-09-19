import React from 'react';
/* HairlineList: numbered ("01") or dashed ("–") list between hairlines. Replaces bullets everywhere. */
export function HairlineList({items=[],numbered=true,size='md',style,...rest}){
  const big=size==='lg';
  return <ol style={{listStyle:'none',margin:0,padding:0,...style}} {...rest}>
    {items.map((it,i)=>{const t=typeof it==='string'?{title:it}:it;return <li key={i} style={{borderTop:'1px solid var(--line)',padding:big?'24px 0':'22px 0',display:'grid',gridTemplateColumns:'56px minmax(0,1fr)',gap:16}}>
      <span style={{font:'var(--type-list-num)',letterSpacing:'.2em'}}>{numbered?'0'+(i+1):'–'}</span>
      <div><h3 style={{margin:0,font:big?'var(--type-secondary)':'var(--type-h4)',textTransform:'uppercase',letterSpacing:big?'var(--tracking-light)':'var(--tracking-mid)'}}>{t.title}</h3>{t.text&&<p style={{margin:'10px 0 0',font:'var(--type-small)',lineHeight:1.7,color:'var(--fg-muted)',maxWidth:'48ch'}}>{t.text}</p>}</div>
    </li>;})}
  </ol>;
}
