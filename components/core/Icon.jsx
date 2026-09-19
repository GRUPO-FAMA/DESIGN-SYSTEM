import React from 'react';
// Lucide glyphs (ISC) — curated brand subset. 1.5px stroke, square caps to match the monogram.
const GLYPHS={
'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
'arrow-left':'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
'arrow-up-right':'<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
'menu':'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
'x':'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
'plus':'<path d="M5 12h14"/><path d="M12 5v14"/>',
'minus':'<path d="M5 12h14"/>',
'check':'<path d="M20 6 9 17l-5-5"/>',
'chevron-down':'<path d="m6 9 6 6 6-6"/>',
'chevron-left':'<path d="m15 18-6-6 6-6"/>',
'chevron-right':'<path d="m9 18 6-6-6-6"/>',
'search':'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
'instagram':'<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
'mail':'<rect width="20" height="16" x="2" y="4" rx="0"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
'map-pin':'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
'calendar':'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="0"/><path d="M3 10h18"/>'
};
export const ICON_NAMES=Object.keys(GLYPHS);
export function Icon({name,size=20,strokeWidth=1.5,style,...rest}){
  const g=GLYPHS[name];
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" aria-hidden={rest['aria-label']?undefined:true} style={{display:'inline-block',flexShrink:0,...style}} dangerouslySetInnerHTML={{__html:g||''}} {...rest}></svg>;
}