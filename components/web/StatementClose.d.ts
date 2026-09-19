/** White closing section: statement with Syne emphasis + two CTAs. Last section before the footer. */
export interface StatementCloseProps {
  label?: string;
  /** Statement text; wrap 1–2 words in <b> for Syne */
  children: React.ReactNode;
  sub?: string;
  primary?: {label: string; href: string};
  secondary?: {label: string; href: string};
  style?: React.CSSProperties;
}
export declare function StatementClose(props: StatementCloseProps): JSX.Element;
