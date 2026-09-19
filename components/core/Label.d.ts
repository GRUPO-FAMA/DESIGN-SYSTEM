export interface LabelProps extends React.HTMLAttributes<HTMLElement>{
  /** Gray ink (#4A4A4A on white, #9A9A9A on a band) */
  muted?:boolean;
  /** 1px rule above the label — used for section eyebrows */
  rule?:boolean;
  /** Rotated 90° for margin captions */
  vertical?:boolean;
  as?:'span'|'p'|'div'|'cite';
  children?:React.ReactNode;
}
export declare function Label(props:LabelProps):JSX.Element;