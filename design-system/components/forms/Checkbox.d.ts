import * as React from "react";

/** Chamfered checkbox with optional description line. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
