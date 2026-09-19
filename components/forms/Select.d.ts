export interface SelectOption{value:string;label:string;disabled?:boolean}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>,'size'>{
  label?:string;
  hint?:string;
  error?:string;
  required?:boolean;
  options:Array<string|SelectOption>;
  placeholder?:string;
  variant?:'outline'|'underline'|'filled';
  size?:'sm'|'md'|'lg';
}
export declare function Select(props:SelectProps):JSX.Element;