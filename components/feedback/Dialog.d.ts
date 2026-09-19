export interface DialogProps{
  open:boolean;
  onClose?:()=>void;
  title?:string;
  eyebrow?:string;
  children?:React.ReactNode;
  /** Row of Buttons */
  actions?:React.ReactNode;
  /** Max width in px. Default 560 */
  width?:number;
  /** Black panel */
  inverse?:boolean;
  style?:React.CSSProperties;
}
export declare function Dialog(props:DialogProps):JSX.Element|null;