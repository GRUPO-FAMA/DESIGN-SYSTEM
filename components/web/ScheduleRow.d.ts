/** One convocatoria row: day/time · dates · places · CTA, single 52px row with hairline top. */
export interface ScheduleRowProps {
  /** "Viernes tarde" */
  day: string;
  /** "16:30 – 20:30" — rendered under the day */
  time?: string;
  /** "25 sep – 11 dic" */
  dates: string;
  places?: number;
  href?: string;
  cta?: string;
  soldOut?: boolean;
  style?: React.CSSProperties;
}
export declare function ScheduleRow(props: ScheduleRowProps): JSX.Element;
