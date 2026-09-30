import * as React from "react";

export interface FooterColumn { title: string; links: string[] }
/** Petrol footer with the white logo plate, orange column headings and a short association note. */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  note?: string;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;
