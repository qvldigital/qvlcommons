import * as React from "react";

/** Single- or multi-line text field. Focus shows the yellow 3 px ring; errors switch it to orange. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}
export function Input(props: InputProps): JSX.Element;
