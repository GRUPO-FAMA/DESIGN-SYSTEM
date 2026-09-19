import React from 'react';
export function Field({label,hint,error,required,htmlFor,children,style}){
  return <div style={{display:'flex',flexDirection:'column',gap:8,...style}}>
    {label&&<label htmlFor={htmlFor} style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)'}}>{label}{required&&' *'}</label>}
    {children}
    {(error||hint)&&<span style={{font:'var(--type-caption)',color:error?'var(--fg)':'var(--fg-muted)',fontWeight:error?600:400}}>{error?'— '+error:hint}</span>}
  </div>;
}