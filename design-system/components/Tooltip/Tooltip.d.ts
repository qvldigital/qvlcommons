import * as React from "react";

/** Short hover/focus hint. Desktop affordance only — never the sole carrier of information on the PWA. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  placement?: "top" | "bottom";
  children?: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
