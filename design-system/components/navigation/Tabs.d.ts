import * as React from "react";

export interface TabItem { value: string; label: string; count?: number }
/** Horizontal, scrollable tab strip. Active tab is a solid petrol chamfered block. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: (TabItem | string)[];
  value?: string;
  onChange?: (value: string) => void;
  /** allow horizontal scroll on narrow screens (default true) */
  scrollable?: boolean;
  /** Optional id prefix that links tabs and panels: each tab gets id `${panelPrefix}-tab-${value}` and aria-controls `${panelPrefix}-panel-${value}`; give the matching panel role="tabpanel", that id and aria-labelledby the tab id. */
  panelPrefix?: string;
}
export function Tabs(props: TabsProps): JSX.Element;
