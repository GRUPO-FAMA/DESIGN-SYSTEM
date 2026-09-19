import React from 'react';
/* Small uppercase editorial label (Inter 500 · 11px · 0.26em). muted = gray ink; rule = 1px top rule above; vertical = rotated caption for margins. */
export function Label({muted=false,rule=false,vertical=false,as='span',children,style,...rest}){
  const Tag=as;
  return <Tag style={{display:vertical?'inline-block':'inline-flex',alignItems:'center',gap:8,font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:muted?'var(--fg-muted)':'var(--fg)',borderTop:rule?'1px solid currentColor':undefined,paddingTop:rule?12:undefined,writingMode:vertical?'vertical-rl':undefined,transform:vertical?'rotate(180deg)':undefined,whiteSpace:'nowrap',...style}} {...rest}>{children}</Tag>;
}
