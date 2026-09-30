import * as React from "react";

/**
 * Fillable net-and-ball background: CSS mesh + a tiled real ball icon over a flat or two-tone
 * CI gradient. For filling arbitrary website sections where the fixed HINTERGRUND_* artwork
 * doesn't fit the aspect ratio.
 * @startingPoint section="Brand" subtitle="Generative net + ball background fill" viewport="700x220"
 */
export interface NetPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  /** flat CI colour or a two-tone diagonal gradient between CI colours */
  base?: "petrol" | "orange" | "petrol-orange" | "orange-petrol" | "petrol-mid" | "pink" | "petrol-pink" | "pink-petrol" | "orange-pink" | "grey";
  /** tint of the tiled ball icon */
  ball?: "petrol" | "petrol-dark" | "orange" | "white";
  /** 0–1, opacity of the white net mesh lines */
  meshOpacity?: number;
  /** 0–1, opacity of the tiled ball icon layer */
  ballOpacity?: number;
  /** tiled ball icon size in px */
  ballSize?: number;
  /** net mesh cell size in px */
  mesh?: number;
  children?: React.ReactNode;
}
export function NetPattern(props: NetPatternProps): JSX.Element;
