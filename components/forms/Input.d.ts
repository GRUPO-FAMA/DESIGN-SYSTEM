export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'size'>{
  label?:string;
  hint?:string;
  error?:string;
  required?:boolean;
  /** outline = 1px black box (default); underline = editorial bottom rule; filled = #F1F1F1 */
  variant?:'outline'|'underline'|'filled';
  size?:'sm'|'md'|'lg';
  /** Renders a textarea */
  multiline?:boolean;
}
export declare function Input(props:InputProps):JSX.Element;