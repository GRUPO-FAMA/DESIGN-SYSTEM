/** Numbered section header on a hairline. Decides Syne vs Space Grotesk from the 4-word / no-FAMA rule. */
export interface SectionHeadProps {
  /** "01", "02"… */
  num: string;
  title: string;
  /** Muted label on the right */
  label?: string;
  /** Force Space Grotesk even for short titles */
  forceMid?: boolean;
  style?: React.CSSProperties;
}
export declare function SectionHead(props: SectionHeadProps): JSX.Element;
export declare function syneAllowed(text: string): boolean;
