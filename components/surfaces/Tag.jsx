import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Tag({selected=false,onRemove,onClick,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const inter=!!onClick;
  return <span role={inter?'button':undefined} tabIndex={inter?0:undefined} onClick={onClick} style={{display:'inline-flex',alignItems:'center',gap:8,height:32,padding:'0 12px',font:'var(--type-small)',border:'1px solid var(--black)',background:selected||(hover&&inter)?'var(--black)':'transparent',color:selected||(hover&&inter)?'var(--white)':'var(--black)',cursor:inter?'pointer':'default',transition:'background var(--dur-fast) var(--ease),color var(--dur-fast) var(--ease)',borderRadius:0,...style}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} {...rest}>
    {children}
    {onRemove&&<button type="button" aria-label="Quitar" onClick={e=>{e.stopPropagation();onRemove();}} style={{all:'unset',cursor:'pointer',display:'flex',color:'inherit'}}><Icon name="x" size={14}/></button>}
  </span>;
}