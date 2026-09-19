import React from 'react';
const S={sm:'var(--control-h-sm)',md:'var(--control-h-md)',lg:'var(--control-h-lg)'};
export function IconButton({variant='ghost',size='md',disabled=false,label,children,style,...rest}){
  const [hover,setHover]=React.useState(false);const [press,setPress]=React.useState(false);
  const base={display:'inline-flex',alignItems:'center',justifyContent:'center',width:S[size],height:S[size],border:'1px solid transparent',borderRadius:0,background:'transparent',color:'var(--fg)',cursor:disabled?'not-allowed':'pointer',padding:0,transition:'opacity var(--dur-base) var(--ease),background var(--dur-base) var(--ease),color var(--dur-base) var(--ease)',appearance:'none'};
  const V={
    primary:{background:'var(--black)',color:'var(--white)',opacity:press?'var(--press-opacity)':hover?'var(--hover-opacity)':1},
    outline:{borderColor:'var(--black)',background:hover?'var(--black)':'transparent',color:hover?'var(--white)':'var(--black)',opacity:press?'var(--press-opacity)':1},
    ghost:{opacity:press?'var(--press-opacity)':hover?'var(--hover-opacity)':1},
    inverse:{color:'var(--white)',opacity:press?'var(--press-opacity)':hover?'var(--hover-opacity)':1}
  }[variant]||{};
  const dis=disabled?{color:'var(--fg-disabled)',background:variant==='primary'?'var(--gray)':'transparent',borderColor:variant==='outline'?'var(--gray-line)':'transparent',opacity:1}:null;
  return <button type="button" aria-label={label} disabled={disabled} style={{...base,...V,...dis,...style}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false)}} onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)} {...rest}>{children}</button>;
}