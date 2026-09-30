import * as React from "react";

/**
 * Primary action control. Bebas Neue uppercase label in a chamfered block — never rounded.
 * @startingPoint section="Core" subtitle="Chamfered block buttons in all four variants" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** petrol solid (default) | orange solid | pink solid | petrol outline | text only */
  variant?: "primary" | "accent" | "pink" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** renders an <a> instead of a <button> */
  href?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
