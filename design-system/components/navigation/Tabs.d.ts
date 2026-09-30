import * as React from "react";

export interface TabItem { value: string; label: string; count?: number }
/** Horizontal, scrollable tab strip. Active tab is a solid petrol chamfered block. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: (TabItem | string)[];
  value?: string;
  onChange?: (value: string) => void;
  /** allow horizontal scroll on narrow screens (default true) */
  scrollable?: boolean;
}
export function Tabs(props: TabsProps): JSX.Element;
