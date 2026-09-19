import React from 'react';
/* Rating: the Google seal "★★★★★ 4,9 · 1.638 reseñas en Google". Update value/count from the live listing; link to the Maps place. */
export function Rating({value='4,9',count='1.638',href='https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJtSXZswsvQg0RgmtxKBz4RKY',style,...rest}){
  return <a href={href} target="_blank" rel="noopener" style={{display:'inline-flex',alignItems:'center',gap:14,font:'var(--type-small)',color:'var(--fg-muted)',textDecoration:'none',...style}} {...rest}>
    <span aria-hidden="true" style={{letterSpacing:'.12em',fontSize:13,color:'var(--fg)'}}>★★★★★</span>
    <span><b style={{fontWeight:500,color:'var(--fg)'}}>{value}</b> · {count} reseñas en Google</span>
  </a>;
}
