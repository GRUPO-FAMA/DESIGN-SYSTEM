/** Fixed bottom-right CTA, hidden while the close/footer is visible. */
export interface StickyCtaProps { label?: string; href?: string; /** selector list */ hideWhen?: string; style?: React.CSSProperties }
export declare function StickyCta(props: StickyCtaProps): JSX.Element;
