import React from 'react';
import {Button} from '../core/Button.jsx';
/* StatementClose: the white closing section — label · statement (Light with 1–2 Syne words via <b>) · Light sub-line · solid + outline buttons. Always the last section before the footer. */
export function StatementClose({label,children,sub,primary,secondary,style,...rest}){
  return <section style={{padding:'var(--section-gap) var(--page-margin)',...style}} {...rest}>
    {label&&<span style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--fg-muted)'}}>{label}</span>}
    <h2 className="fa-stmt" style={{margin:'32px 0 0',font:'var(--type-statement)',fontWeight:300,textTransform:'uppercase',letterSpacing:'.02em',maxWidth:'22ch'}}>{children}</h2>
    {sub&&<p style={{margin:'32px 0 0',font:'var(--type-secondary)',textTransform:'uppercase',letterSpacing:'var(--tracking-light)',maxWidth:'44ch',fontSize:'clamp(16px,1.6vw,24px)'}}>{sub}</p>}
    <div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:48}}>{primary&&<Button variant="solid" href={primary.href}>{primary.label}</Button>}{secondary&&<Button href={secondary.href}>{secondary.label}</Button>}</div>
    <style>{'.fa-stmt b{font-family:var(--font-display);font-weight:800;letter-spacing:var(--tracking-display)}'}</style>
  </section>;
}
