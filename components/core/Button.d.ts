export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  /** outline (default) = 1px ink border, fills on hover; solid = filled ink, hollows on hover; ghost = wide-tracked text link with a sliding arrow */
  variant?:'solid'|'outline'|'ghost';
  /** 40 / 52 / 60 px */
  size?:'sm'|'md'|'lg';
  /** Force white ink for use over photography or a black band (inside .fa-band it inverts automatically) */
  inverse?:boolean;
  disabled?:boolean;
  fullWidth?:boolean;
  /** Trailing icon; ghost renders → by default */
  icon?:React.ReactNode;
  /** Renders an <a> instead of <button> */
  href?:string;
  children?:React.ReactNode;
}
export declare function Button(props:ButtonProps):JSX.Element;