export interface BandProps extends React.HTMLAttributes<HTMLElement>{
  /** Apply --section-gap vertical and --page-margin horizontal padding (default true) */
  padded?:boolean;
  children?:React.ReactNode;
}
export declare function Band(props:BandProps):JSX.Element;