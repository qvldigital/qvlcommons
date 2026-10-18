import * as React from "react";

/** Modal with a petrol 3 px frame, orange block shadow and a petrol scrim. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** aria-label of the close button (default "Schließen"); pass the translated word. */
  closeLabel?: string;
  open?: boolean;
  title?: string;
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  children?: React.ReactNode;
}
export function Dialog(props: DialogProps): JSX.Element | null;
