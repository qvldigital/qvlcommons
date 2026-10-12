import * as React from "react";

/** Friendly blank slate using the brand volleyball as illustration. */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}
export function EmptyState(props: EmptyStateProps): JSX.Element;
