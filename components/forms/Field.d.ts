export interface FieldProps{
  /** Uppercase tracked label */
  label?:string;
  hint?:string;
  /** Error message; rendered in black bold with an em dash — no red exists in the palette */
  error?:string;
  required?:boolean;
  htmlFor?:string;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Field(props:FieldProps):JSX.Element;