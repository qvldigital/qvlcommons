import * as React from "react";

/** Filter / selection chip. Toggleable via `selected` + `onClick`, dismissible via `onRemove`. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
