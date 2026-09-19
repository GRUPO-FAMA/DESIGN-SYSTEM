/** Testimonial quote in Space Grotesk Light with a three-line cite (name / role / date). Real reviews only, verbatim. */
export interface QuoteProps {
  /** Reviewer name as it appears on Google */
  author?: string;
  /** Second cite line: Alumna · Madre de alumna · Padre de alumno */
  role?: string;
  /** Third cite line, dd/mm/yyyy */
  date?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Quote(props: QuoteProps): JSX.Element;
