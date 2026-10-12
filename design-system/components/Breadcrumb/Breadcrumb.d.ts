import * as React from "react";

export interface BreadcrumbItem { value: string; label: string }
/** Path trail for deep league views (Liga → Level B → Gruppe Nord). */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items?: (BreadcrumbItem | string)[];
  onNavigate?: (value: string) => void;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
