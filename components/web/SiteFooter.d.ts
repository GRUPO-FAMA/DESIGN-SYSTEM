/** Black site footer: monogram, four link columns, copyright line only. */
export interface SiteFooterProps {
  columns?: {explora: [string, string][]; legal: [string, string][]; grupo: [string, string][]; rrss: [string, string][]};
  copyright?: string;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
