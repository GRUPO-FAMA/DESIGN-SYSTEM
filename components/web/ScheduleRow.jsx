import React from 'react';
import {Button} from '../core/Button.jsx';
/* ScheduleRow: one convocatoria. day + time (time under the day) · dates · places · button, all centred in one 52px row. soldOut dims the row to 45 %. */
export function ScheduleRow({day,time,dates,places,href,cta='Solicitar plaza',soldOut=false,style,...rest}){
  return <div style={{display:'grid',gridTemplateColumns:'minmax(0,4fr) minmax(0,3fr) minmax(0,2fr) auto',gap:24,alignItems:'center',minHeight:'var(--schedule-row-h)',padding:'20px 0',borderTop:'1px solid var(--line)',opacity:soldOut?.45:1,...style}} {...rest}>
    <div><b style={{display:'block',font:'var(--type-h4)',textTransform:'uppercase',letterSpacing:'var(--tracking-mid)'}}>{day}</b>{time&&<span style={{display:'block',marginTop:6,font:'var(--type-small)',color:'var(--fg-muted)'}}>{time}</span>}</div>
    <span style={{font:'var(--type-small)',color:'var(--fg-muted)'}}>{dates}</span>
    <div style={{display:'flex',alignItems:'baseline',gap:10}}><span style={{font:'var(--type-places)'}}>{soldOut?0:places}</span><span style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--fg-muted)'}}>plazas</span></div>
    {soldOut?<Button variant="outline" size="sm" disabled>Agotado</Button>:<Button variant="solid" size="sm" href={href}>{cta}</Button>}
  </div>;
}
