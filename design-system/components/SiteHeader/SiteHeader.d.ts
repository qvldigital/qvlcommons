import * as React from "react";

export interface NavItem { value: string; label: string }
/**
 * Petrol top bar with the white logo plate, uppercase nav, language switcher and one orange CTA.
 * @startingPoint section="Navigation" subtitle="Petrol site header with language switcher" viewport="700x120"
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  items?: (NavItem | string)[];
  active?: string;
  onNavigate?: (value: string) => void;
  language?: string;
  languages?: string[];
  onLanguage?: (code: string) => void;
  /** label of the single orange CTA */
  cta?: string;
  /** mobile layout: burger menu instead of inline nav */
  compact?: boolean;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
