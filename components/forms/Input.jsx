import React from 'react';
import {Field} from './Field.jsx';
export function Input({label,hint,error,required,variant='outline',size='md',multiline=false,disabled,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=React.useId();const iid=id||uid;
  const h={sm:'var(--control-h-sm)',md:'var(--control-h-md)',lg:'var(--control-h-lg)'}[size];
  const shell={width:'100%',boxSizing:'border-box',height:multiline?undefined:h,minHeight:multiline?120:undefined,padding:variant==='underline'?'0':'0 16px',paddingTop:multiline?12:undefined,paddingBottom:multiline?12:undefined,font:'var(--type-body)',color:disabled?'var(--fg-disabled)':'var(--fg)',background:disabled?'var(--gray)':variant==='filled'?'var(--gray)':'transparent',border:variant==='outline'?'1px solid '+(error?'var(--black)':focus?'var(--black)':disabled?'var(--gray)':'var(--black)'):'0',borderBottom:variant==='underline'?(focus||error?'2px solid var(--black)':'1px solid var(--black)'):undefined,borderRadius:0,outline:'none',boxShadow:focus&&variant!=='underline'?'var(--focus-ring)':'none',transition:'box-shadow var(--dur-fast) var(--ease)',resize:multiline?'vertical':undefined,appearance:'none'};
  const Tag=multiline?'textarea':'input';
  return <Field label={label} hint={hint} error={error} required={required} htmlFor={iid} style={style}>
    <Tag id={iid} disabled={disabled} aria-invalid={!!error||undefined} style={shell} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} {...rest}/>
  </Field>;
}