import * as React from "react";

/** Small uppercase status/label chip. Not interactive — use `Tag` for removable filters. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "petrol" | "orange" | "pink" | "pink-soft" | "outline" | "soft" | "grey" | "yellow";
  size?: "sm" | "md";
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
