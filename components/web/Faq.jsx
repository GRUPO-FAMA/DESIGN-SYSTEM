import React from 'react';
/* Faq: hairline <details> list. Question Space Grotesk 500 20px, +/– in Light on the right, answer Roboto 16/1.7 max 60ch. Mirror the same items in FAQPage JSON-LD. */
export function Faq({items=[],style,...rest}){
  const [open,setOpen]=React.useState(null);
  return <div style={{borderBottom:'1px solid var(--line)',...style}} {...rest}>
    {items.map((it,i)=><details key={i} open={open===i} onToggle={e=>{if(e.target.open)setOpen(i);else if(open===i)setOpen(null);}} style={{borderTop:'1px solid var(--line)',padding:'24px 0'}}>
      <summary style={{font:'var(--type-faq-q)',textTransform:'uppercase',letterSpacing:'var(--tracking-mid)',cursor:'pointer',listStyle:'none',display:'flex',justifyContent:'space-between',gap:24}}>{it.q}<span aria-hidden="true" style={{font:'var(--weight-display-light) 28px/.8 var(--font-display-secondary)'}}>{open===i?'–':'+'}</span></summary>
      <p style={{margin:'16px 0 0',font:'var(--type-body)',lineHeight:1.7,color:'var(--fg-muted)',maxWidth:'60ch'}}>{it.a}</p>
    </details>)}
  </div>;
}
export function faqSchema(items){return {"@type":"FAQPage","mainEntity":items.map(i=>({"@type":"Question","name":i.q,"acceptedAnswer":{"@type":"Answer","text":typeof i.a==='string'?i.a:''}}))};}
