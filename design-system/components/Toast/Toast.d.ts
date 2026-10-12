import * as React from "react";

/** Transient confirmation. Petrol by default; orange only for destructive undo. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "petrol" | "orange" | "pink";
  message?: React.ReactNode;
  action?: string;
  onAction?: () => void;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;

/** Fixed bottom-centre container for toasts. */
export interface ToastStackProps extends React.HTMLAttributes<HTMLDivElement> { children?: React.ReactNode }
export function ToastStack(props: ToastStackProps): JSX.Element;
