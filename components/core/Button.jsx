import React from 'react';
const H={sm:'var(--control-h-sm)',md:'var(--control-h-md)',lg:'var(--control-h-lg)'};
const PX={sm:'var(--control-px-sm)',md:'var(--control-px-md)',lg:'var(--control-px-lg)'};
/* Editorial buttons: 1px outline with wide-tracked Inter label; solid = filled with the ink colour, flips to outline on hover. Inside a .fa-band (black section) colours invert automatically via --fg / --bg tokens; use `inverse` to force it. */
export function Button({variant='outline',size='md',inverse=false,disabled=false,fullWidth=false,icon,href,children,style,...rest}){
  const [hover,setHover]=React.useState(false);const [press,setPress]=React.useState(false);
  const ink=inverse?'var(--white)':'var(--fg)';const paper=inverse?'var(--black)':'var(--bg)';
  const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:12,height:H[size],padding:'0 '+PX[size],font:'var(--type-button)',textTransform:'uppercase',letterSpacing:'var(--tracking-button)',border:'1px solid '+ink,borderRadius:0,cursor:disabled?'not-allowed':'pointer',transition:'background var(--dur-base) var(--ease),color var(--dur-base) var(--ease),opacity var(--dur-base) var(--ease)',width:fullWidth?'100%':undefined,textDecoration:'none',whiteSpace:'nowrap',appearance:'none',background:'transparent',color:ink,opacity:press?.6:1};
  const V={
    solid:{background:hover?'transparent':ink,color:hover?ink:paper},
    outline:{background:hover?ink:'transparent',color:hover?paper:ink},
    ghost:{border:'1px solid transparent',padding:0,height:'auto',background:'transparent',color:ink,textDecoration:'none'}
  }[variant]||{};
  const dis=disabled?{background:'transparent',color:'var(--fg-disabled)',borderColor:variant==='ghost'?'transparent':'var(--fg-disabled)',opacity:1}:null;
  const Tag=href?'a':'button';
  const arrow=variant==='ghost'&&!icon?<span aria-hidden="true" style={{display:'inline-block',transition:'transform var(--dur-base) var(--ease)',transform:hover?'translateX(6px)':'none'}}>→</span>:icon;
  return <Tag href={href} disabled={!href&&disabled?true:undefined} aria-disabled={disabled||undefined} style={{...base,...V,...dis,...style}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false)}} onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)} {...rest}>{children}{arrow}</Tag>;
}
