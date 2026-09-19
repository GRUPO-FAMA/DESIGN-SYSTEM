/** Rating seal + grid of verbatim Google reviews with three-line cites. */
export interface TestimonialProps { items: {text: string; author: string; role?: string; date?: string}[]; rating?: boolean; style?: React.CSSProperties }
export declare function Testimonial(props: TestimonialProps): JSX.Element;
