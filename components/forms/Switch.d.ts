export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'onChange'|'type'>{
  label?:React.ReactNode;
  checked?:boolean;
  onChange?:(checked:boolean,event:React.ChangeEvent<HTMLInputElement>)=>void;
  disabled?:boolean;
  style?:React.CSSProperties;
}
export declare function Switch(props:SwitchProps):JSX.Element;