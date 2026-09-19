import React from 'react';
/* Band: a full-bleed black section (the sanctioned inverse block). Sets --fg/--line/--action tokens so children invert automatically. */
export function Band({padded=true,children,style,...rest}){
  return <section className="fa-band" style={{background:'var(--band-bg)',color:'var(--band-fg)',padding:padded?'var(--section-gap) var(--page-margin)':0,...style}} {...rest}>{children}</section>;
}
