import React from 'react';
export function Card({variant='gray',image,imageRatio='4 / 5',imageAlt='',eyebrow,title,meta,children,action,padding=24,href,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const bg={gray:'var(--surface-card)',white:'var(--white)',outline:'transparent',inverse:'var(--bg-inverse)',plain:'transparent'}[variant];
  const fg=variant==='inverse'?'var(--fg-inverse)':'var(--fg)';
  const Tag=href?'a':'div';
  const interactive=!!(href||onClick);
  return <Tag href={href} onClick={onClick} style={{display:'flex',flexDirection:'column',background:bg,color:fg,border:variant==='outline'?'1px solid var(--black)':'none',borderRadius:0,textDecoration:'none',cursor:interactive?'pointer':undefined,...style}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} {...rest}>
    {image!==undefined&&<div style={{aspectRatio:imageRatio,background:'var(--image-placeholder)',overflow:'hidden',position:'relative'}}>
      {image?<img src={image} alt={imageAlt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',opacity:hover&&interactive?.85:1,transition:'opacity var(--dur-base) var(--ease)'}}/>:<span style={{position:'absolute',left:'10%',bottom:'10%',font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--fg-muted)'}}>Fotografía</span>}
    </div>}
    {(eyebrow||title||meta||children||action)&&<div style={{padding:variant==='plain'?(image!==undefined?'16px 0 0':0):padding,display:'flex',flexDirection:'column',gap:8,flex:1}}>
      {eyebrow&&<span style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',opacity:.7}}>{eyebrow}</span>}
      {title&&<h3 style={{font:'var(--type-h3)',textTransform:'uppercase',letterSpacing:'var(--tracking-display-sm)',margin:0,textDecoration:hover&&interactive?'underline':'none',textUnderlineOffset:4}}>{title}</h3>}
      {meta&&<span style={{font:'var(--type-small)',opacity:.8}}>{meta}</span>}
      {children&&<div style={{font:'var(--type-body)',marginTop:4}}>{children}</div>}
      {action&&<div style={{marginTop:'auto',paddingTop:16}}>{action}</div>}
    </div>}
  </Tag>;
}