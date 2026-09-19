import React from 'react';
export function Badge({variant='solid',children,style,...rest}){
  const V={solid:{background:'var(--black)',color:'var(--white)',border:'1px solid var(--black)'},outline:{background:'transparent',color:'var(--black)',border:'1px solid var(--black)'},subtle:{background:'var(--gray)',color:'var(--black)',border:'1px solid var(--gray)'},inverse:{background:'var(--white)',color:'var(--black)',border:'1px solid var(--white)'}}[variant];
  return <span style={{display:'inline-flex',alignItems:'center',height:22,padding:'0 8px',font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',whiteSpace:'nowrap',borderRadius:0,...V,...style}} {...rest}>{children}</span>;
}