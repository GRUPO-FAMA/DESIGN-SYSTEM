export interface ModelCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  /** Display name as on models.famaacademy.es, e.g. "Adriana C" */
  name:string;
  image?:string;
  href?:string;
  /** Right-hand label, default "Ver ficha" */
  action?:string;
}
export declare function ModelCard(props:ModelCardProps):JSX.Element;