/** Site navigation: fixed, transparent→black on scroll, collapsed "Menú" panel on every breakpoint. */
export interface SiteNavProps {
  /** [label, href] pairs; first is the logo link */
  links?: [string, string][];
  cta?: {label: string; href: string};
  /** Force the solid state (e.g. pages without hero) */
  solid?: boolean;
  fixed?: boolean;
  style?: React.CSSProperties;
}
export declare function SiteNav(props: SiteNavProps): JSX.Element;
export declare const SITE_LINKS: [string, string][];
