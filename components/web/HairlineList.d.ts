/** Numbered or dashed list separated by hairlines; the brand never uses bullets. */
export interface HairlineListProps { items: (string | {title: string; text?: string})[]; numbered?: boolean; size?: 'md' | 'lg'; style?: React.CSSProperties }
export declare function HairlineList(props: HairlineListProps): JSX.Element;
