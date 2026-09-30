import * as React from "react";

/** The QVL wordmark / icon. Never recolour, outline or redraw it — use the supplied files. */
export interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  /** long lockup on light (default), long lockup with orange "Queer", short lockup, or the QVL icon */
  variant?: "long-petrol" | "long-orange" | "short" | "icon";
  height?: number;
}
export function Logo(props: LogoProps): JSX.Element;
