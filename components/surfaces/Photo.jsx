import React from 'react';
/* Photo: the brand's image frame. Rests in B/W, returns to colour and scales 3 % on hover. ratio as CSS aspect-ratio string. caption is a small label in the lower-left. */
export function Photo({src,alt='',ratio='4 / 5',caption,hoverColor=true,style,...rest}){
  const [hover,setHover]=React.useState(false);
  return <div className="fa-photo" style={{position:'relative',overflow:'hidden',aspectRatio:ratio,background:'var(--image-placeholder)',...style}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} {...rest}>
    {src?<img src={src} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',filter:hover&&hoverColor?'var(--image-filter-hover)':'var(--image-filter)',transform:hover?'scale(var(--image-hover-scale))':'none',transition:'filter var(--dur-slow) var(--ease),transform var(--dur-image) var(--ease)'}}/>:null}
    {caption&&<span style={{position:'absolute',left:16,bottom:14,font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--gray-mid)'}}>{caption}</span>}
  </div>;
}
