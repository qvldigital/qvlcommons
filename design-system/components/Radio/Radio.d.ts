import * as React from "react";

/** Single-choice control; the selected dot is orange inside a petrol chamfered frame. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
}
export function Radio(props: RadioProps): JSX.Element;

export interface RadioGroupProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  legend?: string;
  children?: React.ReactNode;
}
export function RadioGroup(props: RadioGroupProps): JSX.Element;
