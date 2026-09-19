export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'onChange'|'type'|'value'>{
  label?:React.ReactNode;
  value:string;
  checked?:boolean;
  onChange?:(value:string,event:React.ChangeEvent<HTMLInputElement>)=>void;
  disabled?:boolean;
  name?:string;
  style?:React.CSSProperties;
}
export interface RadioGroupProps{
  name:string;
  value?:string;
  onChange?:(value:string)=>void;
  options:Array<string|{value:string;label:React.ReactNode;disabled?:boolean}>;
  direction?:'row'|'column';
  disabled?:boolean;
  style?:React.CSSProperties;
}
export declare function Radio(props:RadioProps):JSX.Element;
export declare function RadioGroup(props:RadioGroupProps):JSX.Element;