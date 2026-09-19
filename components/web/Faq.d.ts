/** Hairline FAQ accordion; one open at a time. Use faqSchema(items) for the JSON-LD twin. */
export interface FaqProps { items: {q: string; a: React.ReactNode}[]; style?: React.CSSProperties }
export declare function Faq(props: FaqProps): JSX.Element;
export declare function faqSchema(items: {q: string; a: string}[]): object;
