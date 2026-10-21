import * as React from "react";

export interface NavItem { value: string; label: string }
/**
 * Petrol top bar with the white logo plate, uppercase nav, language switcher and one orange CTA.
 * @startingPoint section="Navigation" subtitle="Petrol site header with language switcher" viewport="700x120"
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** visually hidden label of the language select (default "Sprache"); pass the translated word. */
  languageLabel?: string;
  /** aria-label of the menu button in compact mode (default "Menü"); pass the translated word. */
  menuLabel?: string;
  items?: (NavItem | string)[];
  active?: string;
  onNavigate?: (value: string) => void;
  language?: string;
  languages?: string[];
  onLanguage?: (code: string) => void;
  /** label of the single orange CTA */
  cta?: string;
  /** Menu-button layout. Omit it to switch automatically when logo, navigation and actions no longer fit in one row (any language); true or false forces a layout. */
  compact?: boolean;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
