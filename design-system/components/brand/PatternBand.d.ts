import * as React from "react";

/**
 * Decorative icon-in-the-net pattern band (documents/info, table/medal, gear/cards).
 * @startingPoint section="Brand" subtitle="Icon-net pattern band with white text plate" viewport="700x200"
 */
export interface PatternBandProps extends React.HTMLAttributes<HTMLDivElement> {
  pattern?: "documents" | "table" | "gear";
  height?: number;
  /** wrap children in a solid white chamfered plate so text stays legible on the pattern */
  plate?: boolean;
  children?: React.ReactNode;
}
export function PatternBand(props: PatternBandProps): JSX.Element;
