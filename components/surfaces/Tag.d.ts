export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>{
  /** Filled black when selected (filter chips) */
  selected?:boolean;
  /** Shows an × and makes the tag removable */
  onRemove?:()=>void;
  children?:React.ReactNode;
}
export declare function Tag(props:TagProps):JSX.Element;