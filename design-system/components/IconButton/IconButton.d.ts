import * as React from "react";

/** Square chamfered button holding a single icon. Always needs `label` for screen readers. */
export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "pink" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** accessible name, also used as the tooltip */
  label: string;
  children?: React.ReactNode;
}
export function IconButton(props: IconButtonProps): JSX.Element;
