import React from 'react';
const VARIANTS=['stacked','stacked-wordmark','horizontal','horizontal-wordmark','mark','mark-square','mark-circle'];
export function Logo({variant='horizontal',inverse=false,height,width,base,style,...rest}){
  const root=base||(typeof window!=='undefined'&&window.FAMA_ASSETS_BASE)||'assets';
  const v=VARIANTS.includes(variant)?variant:'horizontal';
  const src=root+'/logo/svg/fama-academy-'+v+(inverse?'-white':'-black')+'.svg';
  const h=height||(v.startsWith('mark')?32:v.startsWith('stacked')?96:28);
  return <img src={src} alt="FAMA Academy" style={{display:'block',height:width?undefined:h,width:width,...style}} {...rest}/>;
}
