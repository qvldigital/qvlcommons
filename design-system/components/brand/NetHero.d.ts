import * as React from "react";

/**
 * Full-bleed hero using the CI net-and-ball artwork. Text sits in the empty upper-left field of the image.
 * @startingPoint section="Brand" subtitle="Full-bleed net hero with eyebrow, headline and CTAs" viewport="700x380"
 */
export interface NetHeroProps extends React.HTMLAttributes<HTMLElement> {
  /** which supplied net background to use */
  background?: "grey-petrol" | "grey-orange" | "grey-yellow" | "grey-grey" | "petrol-grey" | "petrol-petrol" | "orange-petrol" | "orange-petrol-v2";
  eyebrow?: string;
  title?: string;
  lead?: string;
  actions?: React.ReactNode;
  align?: "left" | "center";
  minHeight?: number;
  /** force white or petrol text instead of the automatic choice */
  inkOnDark?: boolean;
}
export function NetHero(props: NetHeroProps): JSX.Element;
