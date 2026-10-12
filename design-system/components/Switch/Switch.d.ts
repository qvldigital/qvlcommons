import * as React from "react";

/** Instant-apply toggle (notifications, visibility). Use `Checkbox` inside forms that are saved explicitly. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
}
export function Switch(props: SwitchProps): JSX.Element;
