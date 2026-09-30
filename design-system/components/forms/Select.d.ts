import * as React from "react";

export interface SelectOption { value: string; label: string }
/** Native select in QVL shell with a chamfered petrol caret. Used for Level, Region, Sprache, Saison. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  options?: (SelectOption | string)[];
  placeholder?: string;
}
export function Select(props: SelectProps): JSX.Element;
