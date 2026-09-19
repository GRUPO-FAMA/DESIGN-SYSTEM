export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>{
  /** solid = black; outline = 1px black; subtle = #F1F1F1; inverse = white (on black) */
  variant?:'solid'|'outline'|'subtle'|'inverse';
  children?:React.ReactNode;
}
export declare function Badge(props:BadgeProps):JSX.Element;