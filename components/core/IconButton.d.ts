export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,'children'>{
  /** Accessible name — required */
  label:string;
  variant?:'primary'|'outline'|'ghost'|'inverse';
  /** Square: 36 / 44 / 56 px */
  size?:'sm'|'md'|'lg';
  disabled?:boolean;
  /** Usually a single <Icon/> */
  children?:React.ReactNode;
}
export declare function IconButton(props:IconButtonProps):JSX.Element;