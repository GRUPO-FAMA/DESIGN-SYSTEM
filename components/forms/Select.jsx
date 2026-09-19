import React from 'react';
import {Field} from './Field.jsx';
import {Icon} from '../core/Icon.jsx';
export function Select({label,hint,error,required,options=[],placeholder,variant='outline',size='md',disabled,id,style,value,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=React.useId();const iid=id||uid;
  const h={sm:'var(--control-h-sm)',md:'var(--control-h-md)',lg:'var(--control-h-lg)'}[size];
  const shell={width:'100%',boxSizing:'border-box',height:h,padding:variant==='underline'?'0 32px 0 0':'0 44px 0 16px',font:'var(--type-body)',color:disabled?'var(--fg-disabled)':(value===''||value===undefined)&&placeholder?'var(--fg-muted)':'var(--fg)',background:disabled?'var(--gray)':variant==='filled'?'var(--gray)':'transparent',border:variant==='outline'?'1px solid '+(disabled?'var(--gray)':'var(--black)'):'0',borderBottom:variant==='underline'?(focus?'2px solid var(--black)':'1px solid var(--black)'):undefined,borderRadius:0,outline:'none',boxShadow:focus&&variant!=='underline'?'var(--focus-ring)':'none',appearance:'none',WebkitAppearance:'none',cursor:disabled?'not-allowed':'pointer'};
  return <Field label={label} hint={hint} error={error} required={required} htmlFor={iid} style={style}>
    <div style={{position:'relative'}}>
      <select id={iid} disabled={disabled} value={value} style={shell} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} {...rest}>
        {placeholder&&<option value="" disabled>{placeholder}</option>}
        {options.map(o=>typeof o==='string'?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
      </select>
      <span style={{position:'absolute',right:variant==='underline'?0:14,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:disabled?'var(--fg-disabled)':'var(--fg)',display:'flex'}}><Icon name="chevron-down" size={18}/></span>
    </div>
  </Field>;
}