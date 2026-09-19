export interface TabItem{id:string;label:React.ReactNode;disabled?:boolean}
export interface TabsProps{
  items:TabItem[];
  value?:string;
  onChange?:(id:string)=>void;
  /** White text/line on black blocks */
  inverse?:boolean;
  style?:React.CSSProperties;
}
export declare function Tabs(props:TabsProps):JSX.Element;