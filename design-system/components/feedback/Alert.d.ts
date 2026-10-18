import * as React from "react";

/**
 * Inline message block. `tone="safe"` is the Safe-Space notice — white with a yellow border.
 * @startingPoint section="Feedback" subtitle="Inline alerts incl. the Safe-Space notice" viewport="700x320"
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** aria-label of the close button (default "Schließen"); pass the translated word. */
  closeLabel?: string;
  tone?: "info" | "success" | "warn" | "danger" | "safe";
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;
