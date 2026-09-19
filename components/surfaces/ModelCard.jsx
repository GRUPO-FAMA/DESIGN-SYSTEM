import React from 'react';
import {Photo} from './Photo';
/* ModelCard: 3:4 portrait, name in Syne 800, action label right. Used in the horizontal Modelos rail. */
export function ModelCard({name,image,href,action='Ver ficha',style,...rest}){
  return <a href={href} style={{display:'block',textDecoration:'none',color:'inherit',flex:'0 0 auto',...style}} {...rest}>
    <Photo src={image} alt={name} ratio="3 / 4"/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12,marginTop:16}}>
      <h3 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-display)',textTransform:'uppercase',letterSpacing:'var(--tracking-display-sm)',fontSize:20,lineHeight:1,margin:0}}>{name}</h3>
      <span style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--fg-muted)',whiteSpace:'nowrap'}}>{action}</span>
    </div>
  </a>;
}
