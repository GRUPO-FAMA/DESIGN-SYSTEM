export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement>{
  /** Lockup. 'stacked' = primary (mark + FAMA + ACADEMY). 'horizontal' for nav/footer. '*-wordmark' = no mark. 'mark' = FF monogram alone; 'mark-square' / 'mark-circle' = monogram inside a container (avatars, favicons). */
  variant?:'stacked'|'stacked-wordmark'|'horizontal'|'horizontal-wordmark'|'mark'|'mark-square'|'mark-circle';
  /** White artwork for black blocks / dark photos. On mark-square / mark-circle it swaps the container to white with a black mark. */
  inverse?:boolean;
  height?:number|string;
  width?:number|string;
  /** Path to the design system's assets folder. Defaults to window.FAMA_ASSETS_BASE or 'assets' */
  base?:string;
}
export declare function Logo(props:LogoProps):JSX.Element;
