import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Checkbox({label,checked=false,onChange,disabled,indeterminate,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const box={width:18,height:18,flexShrink:0,border:'1px solid '+(disabled?'var(--gray-line)':'var(--black)'),background:checked||indeterminate?(disabled?'var(--gray-line)':'var(--black)'):'var(--white)',color:'var(--white)',display:'grid',placeItems:'center',transition:'background var(--dur-fast) var(--ease)',opacity:hover&&!disabled?.7:1};
  return <label style={{display:'inline-flex',alignItems:'center',gap:12,cursor:disabled?'not-allowed':'pointer',font:'var(--type-small)',color:disabled?'var(--fg-disabled)':'var(--fg)',...style}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
    <input type="checkbox" checked={checked} disabled={disabled} onChange={e=>onChange&&onChange(e.target.checked,e)} style={{position:'absolute',opacity:0,width:0,height:0}} {...rest}/>
    <span aria-hidden style={box}>{indeterminate?<Icon name="minus" size={12} strokeWidth={2}/>:checked?<Icon name="check" size={12} strokeWidth={2.2}/>:null}</span>
    {label&&<span>{label}</span>}
  </label>;
}