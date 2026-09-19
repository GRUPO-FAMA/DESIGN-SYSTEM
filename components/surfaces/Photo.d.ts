export interface PhotoProps extends React.HTMLAttributes<HTMLDivElement>{
  src?:string;
  alt?:string;
  /** CSS aspect-ratio, e.g. '4 / 5' (cards), '3 / 4' (models), '16 / 9' (hero) */
  ratio?:string;
  /** Small gray label in the lower-left (placeholder hint or credit) */
  caption?:string;
  /** Return to colour on hover (default true) */
  hoverColor?:boolean;
}
export declare function Photo(props:PhotoProps):JSX.Element;