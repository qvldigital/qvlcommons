import * as React from "react";

export interface BottomNavItem { value: string; label: string; icon?: React.ReactNode }
/** PWA bottom bar — 44 px minimum targets, active item marked in orange. */
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: BottomNavItem[];
  value?: string;
  onChange?: (value: string) => void;
}
export function BottomNav(props: BottomNavProps): JSX.Element;
