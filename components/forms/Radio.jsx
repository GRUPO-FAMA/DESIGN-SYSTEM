import React from 'react';
export function Radio({label,checked=false,onChange,disabled,name,value,style,...rest}){
  const [hover,setHover]=React.useState(false);
  return <label style={{display:'inline-flex',alignItems:'center',gap:12,cursor:disabled?'not-allowed':'pointer',font:'var(--type-small)',color:disabled?'var(--fg-disabled)':'var(--fg)',...style}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
    <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={e=>onChange&&onChange(value,e)} style={{position:'absolute',opacity:0,width:0,height:0}} {...rest}/>
    <span aria-hidden style={{width:18,height:18,flexShrink:0,borderRadius:'50%',border:'1px solid '+(disabled?'var(--gray-line)':'var(--black)'),display:'grid',placeItems:'center',opacity:hover&&!disabled?.7:1}}>
      {checked&&<span style={{width:10,height:10,borderRadius:'50%',background:disabled?'var(--gray-line)':'var(--black)'}}></span>}
    </span>
    {label&&<span>{label}</span>}
  </label>;
}
export function RadioGroup({name,value,onChange,options=[],direction='column',disabled,style}){
  return <div role="radiogroup" style={{display:'flex',flexDirection:direction,gap:direction==='row'?24:12,...style}}>
    {options.map(o=>{const opt=typeof o==='string'?{value:o,label:o}:o;return <Radio key={opt.value} name={name} value={opt.value} label={opt.label} checked={value===opt.value} disabled={disabled||opt.disabled} onChange={onChange}/>;})}
  </div>;
}