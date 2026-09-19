export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>,'title'>{
  /** gray = #F1F1F1 fill (default on white); white = on gray sections; outline = 1px black; inverse = black; plain = no surface (editorial list) */
  variant?:'gray'|'white'|'outline'|'inverse'|'plain';
  /** Image URL. Pass '' or null to render a gray placeholder slot; omit for no image */
  image?:string|null;
  /** CSS aspect-ratio. Default '4 / 5' */
  imageRatio?:string;
  imageAlt?:string;
  /** Small uppercase tracked label above the title (e.g. 'MADRID · 12 SEMANAS') */
  eyebrow?:string;
  title?:string;
  meta?:React.ReactNode;
  children?:React.ReactNode;
  /** Bottom slot, usually a ghost Button */
  action?:React.ReactNode;
  padding?:number|string;
  href?:string;
}
export declare function Card(props:CardProps):JSX.Element;