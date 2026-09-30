import * as React from "react";

/** Level letter (A–D) plus optional region / Spielklasse, as two chamfered blocks. */
export interface LevelBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "A" | "B" | "C" | "D" */
  level: string;
  /** Nord | Ost | Süd | West | Mitte */
  region?: string;
  /** e.g. "FLINTA*", "Senior*innen" */
  klasse?: string;
  size?: "sm" | "md" | "lg";
}
export function LevelBadge(props: LevelBadgeProps): JSX.Element;
