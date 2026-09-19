import React from 'react';
/* SectionHead: "0X · Title · label" on a top hairline. Title goes Syne only when ≤ 4 words and it does not contain FAMA; otherwise Space Grotesk 500. */
export function syneAllowed(text){const t=String(text||'').trim();return t.split(/\s+/).filter(Boolean).length<=4&&!/\bFAMA\b/i.test(t);}
export function SectionHead({num,title,label,forceMid=false,style,...rest}){
  const syne=!forceMid&&syneAllowed(title);
  const titleStyle=syne?{font:'var(--type-h2)',textTransform:'uppercase',letterSpacing:'var(--tracking-display)',fontSize:'clamp(28px,4vw,72px)',lineHeight:.86}:{font:'var(--type-section)',textTransform:'uppercase',letterSpacing:'var(--tracking-mid)',fontSize:'clamp(20px,2.2vw,32px)'};
  return <div style={{display:'grid',gridTemplateColumns:'auto minmax(0,1fr) auto',gap:32,alignItems:'baseline',paddingTop:28,borderTop:'1px solid var(--line)',...style}} {...rest}>
    <span style={{font:'var(--type-section-num)',letterSpacing:'.04em'}}>{num}</span>
    <h2 style={{margin:0,...titleStyle}}>{title}</h2>
    {label&&<span style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--fg-muted)',whiteSpace:'nowrap'}}>{label}</span>}
  </div>;
}
