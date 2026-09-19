export interface ToastProps{
  open?:boolean;
  message:React.ReactNode;
  /** Uppercase underlined action label */
  action?:string;
  onAction?:()=>void;
  onClose?:()=>void;
  position?:'bottom-left'|'bottom-right'|'top-left'|'top-right';
  /** false renders inline (for specimens) */
  fixed?:boolean;
  style?:React.CSSProperties;
}
export declare function Toast(props:ToastProps):JSX.Element|null;