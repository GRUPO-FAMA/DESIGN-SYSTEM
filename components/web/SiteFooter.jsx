import React from 'react';
import {Logo} from '../core/Logo.jsx';
/* SiteFooter: black. Discreet centred monogram, four columns (Explora in two sub-columns · Legal · Grupo · RRSS), bottom line with the copyright only. */
const DEF={explora:[['Método FAMA','#'],['FAMA Academy','#'],['Blog','#'],['Contacto','#'],['Preguntas frecuentes','#'],['Escuela de modelos en Madrid','#'],['Cómo ser modelo','#'],['Castings','#'],['Autoestima y confianza','#'],['Para padres','#'],['Curso online de Casting','#'],['Curso online de Posado','#']],legal:[['Aviso legal','#'],['Política de privacidad','#'],['Política de cookies','#'],['Condiciones generales','#']],grupo:[['FAMA Management','https://famamanagement.com/'],['FAMA Spaces','https://famaspaces.es/'],['FAMA Academy','https://famaacademy.es'],['FAMA Agency','https://famaagency.es']],rrss:[['Instagram','https://www.instagram.com/famaacademy'],['Tiktok','https://www.tiktok.com/@famaacademy'],['Youtube','https://www.youtube.com/@famaacademy_escuelamodelos/']]};
export function SiteFooter({columns=DEF,copyright='© 2026 FAMA Academy. Madrid · Barcelona.',style}){
  const lbl={font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--gray-mid)'};
  const ul=(items,two)=><ul style={{listStyle:'none',margin:'20px 0 0',padding:0,...(two?{columns:2,columnGap:32}:{display:'flex',flexDirection:'column',gap:12}),font:'var(--type-small)',color:'#F1F1F1'}}>{items.map(([t,h],i)=><li key={i} style={two?{marginBottom:12,breakInside:'avoid'}:null}><a href={h} style={{color:'inherit',textDecoration:'none'}}>{t}</a></li>)}</ul>;
  return <footer className="fa-band" style={{background:'#000',color:'#fff',padding:'var(--section-gap) var(--page-margin) 40px',display:'grid',gap:'clamp(64px,8vw,120px)',...style}}>
    <div style={{display:'grid',placeItems:'center'}}><Logo variant="mark" inverse style={{width:'var(--footer-mark-w)',minWidth:96}}/></div>
    <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:32,borderTop:'1px solid var(--line-on-black)',paddingTop:48}}>
      <div><span style={lbl}>Explora</span>{ul(columns.explora,true)}</div>
      <div><span style={lbl}>Legal</span>{ul(columns.legal)}</div>
      <div><span style={lbl}>Grupo</span>{ul(columns.grupo)}</div>
      <div><span style={lbl}>RRSS</span>{ul(columns.rrss)}</div>
    </div>
    <div style={{borderTop:'1px solid var(--line-on-black)',paddingTop:24,font:'var(--type-caption)',color:'var(--gray-mid)'}}>{copyright}</div>
  </footer>;
}
