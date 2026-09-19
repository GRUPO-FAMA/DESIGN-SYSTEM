import React from 'react';
export function Tooltip({content,side='top',children,style}){
  const [on,setOn]=React.useState(false);
  const off=8;
  const pos={top:{bottom:'100%',left:'50%',transform:'translate(-50%,-'+off+'px)'},bottom:{top:'100%',left:'50%',transform:'translate(-50%,'+off+'px)'},left:{right:'100%',top:'50%',transform:'translate(-'+off+'px,-50%)'},right:{left:'100%',top:'50%',transform:'translate('+off+'px,-50%)'}}[side];
  return <span style={{position:'relative',display:'inline-flex',...style}} onMouseEnter={()=>setOn(true)} onMouseLeave={()=>setOn(false)} onFocus={()=>setOn(true)} onBlur={()=>setOn(false)}>
    {children}
    <span role="tooltip" style={{position:'absolute',...pos,background:'var(--black)',color:'var(--white)',font:'var(--type-caption)',padding:'6px 10px',whiteSpace:'nowrap',pointerEvents:'none',opacity:on?1:0,transition:'opacity var(--dur-fast) var(--ease)',zIndex:50,borderRadius:0}}>{content}</span>
  </span>;
}