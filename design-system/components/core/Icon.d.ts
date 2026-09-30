import * as React from "react";

/** Lucide glyph rendered as a CSS mask so it inherits `currentColor`. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** kebab-case Lucide icon name, e.g. "calendar-days" */
  name: string;
  size?: number;
  color?: string;
  /** provide only when the icon carries meaning on its own */
  label?: string;
}
export function Icon(props: IconProps): JSX.Element;

/** The CI volleyball mark. */
export interface BallIconProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: number;
  tone?: "petrol" | "petrol-dark" | "orange" | "white";
}
export function BallIcon(props: BallIconProps): JSX.Element;
