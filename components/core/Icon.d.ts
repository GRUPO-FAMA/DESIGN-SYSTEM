export type IconName='arrow-right'|'arrow-left'|'arrow-up-right'|'menu'|'x'|'plus'|'minus'|'check'|'chevron-down'|'chevron-left'|'chevron-right'|'search'|'instagram'|'mail'|'map-pin'|'calendar';
export interface IconProps extends React.SVGAttributes<SVGSVGElement>{
  /** Lucide glyph name from the curated brand subset */
  name:IconName;
  /** Pixel size (square). Default 20 */
  size?:number;
  /** Default 1.5 — never heavier than 2 */
  strokeWidth?:number;
}
export declare function Icon(props:IconProps):JSX.Element;
export declare const ICON_NAMES:IconName[];