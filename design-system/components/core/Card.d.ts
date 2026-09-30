import * as React from "react";

/**
 * Chamfered content panel. Flat — no blur, no soft shadow; `block` adds the solid 6 px offset shadow.
 * @startingPoint section="Core" subtitle="Chamfered card tones with optional block shadow" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "default" | "brand" | "soft" | "accent" | "pink";
  /** colour of the block shadow (default petrol) */
  blockColor?: "petrol" | "orange" | "pink";
  /** 2 px edge in the tone's border colour (default true) */
  border?: boolean;
  /** solid petrol offset shadow instead of flat */
  block?: boolean;
  /** chamfer size in px, default 12 */
  ch?: number;
  padding?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
