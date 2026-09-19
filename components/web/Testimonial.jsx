import React from 'react';
import {Quote} from '../surfaces/Quote.jsx';
import {Rating} from './Rating.jsx';
/* Testimonials: rating seal + auto-fit grid of real Google quotes (3-line cites). */
export function Testimonial({items=[],rating=true,style,...rest}){
  return <div style={style} {...rest}>
    {rating&&<Rating style={{marginBottom:'clamp(40px,5vw,80px)'}}/>}
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'48px 40px',borderTop:'1px solid var(--line)',paddingTop:'clamp(40px,5vw,80px)'}}>
      {items.map((t,i)=><Quote key={i} author={t.author} role={t.role} date={t.date}>{t.text}</Quote>)}
    </div>
  </div>;
}
