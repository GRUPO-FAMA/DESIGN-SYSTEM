export interface TooltipProps{
  content:React.ReactNode;
  side?:'top'|'bottom'|'left'|'right';
  children:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Tooltip(props:TooltipProps):JSX.Element;