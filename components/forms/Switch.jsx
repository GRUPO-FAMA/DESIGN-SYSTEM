import React from 'react';
export function Switch({label,checked=false,onChange,disabled,style,...rest}){
  return <label style={{display:'inline-flex',alignItems:'center',gap:12,cursor:disabled?'not-allowed':'pointer',font:'var(--type-small)',color:disabled?'var(--fg-disabled)':'var(--fg)',...style}}>
    <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={e=>onChange&&onChange(e.target.checked,e)} style={{position:'absolute',opacity:0,width:0,height:0}} {...rest}/>
    <span aria-hidden style={{width:40,height:22,flexShrink:0,border:'1px solid '+(disabled?'var(--gray-line)':'var(--black)'),background:checked?(disabled?'var(--gray-line)':'var(--black)'):'var(--white)',position:'relative',transition:'background var(--dur-base) var(--ease)'}}>
      <span style={{position:'absolute',top:3,left:checked?21:3,width:14,height:14,background:checked?'var(--white)':(disabled?'var(--gray-line)':'var(--black)'),transition:'left var(--dur-base) var(--ease),background var(--dur-base) var(--ease)'}}></span>
    </span>
    {label&&<span>{label}</span>}
  </label>;
}