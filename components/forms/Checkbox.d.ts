export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'onChange'|'type'>{
  label?:React.ReactNode;
  checked?:boolean;
  onChange?:(checked:boolean,event:React.ChangeEvent<HTMLInputElement>)=>void;
  disabled?:boolean;
  indeterminate?:boolean;
  style?:React.CSSProperties;
}
export declare function Checkbox(props:CheckboxProps):JSX.Element;