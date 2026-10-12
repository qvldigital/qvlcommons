import * as React from "react";

/** Light/dark switch (sun/moon icon button). Uncontrolled it drives window.QVLTheme (theme.js); pass mode+onChange to control it. */
export interface ThemeToggleProps extends Omit<React.HTMLAttributes<HTMLButtonElement>,"onChange"> {
  mode?: "light" | "dark";
  onChange?: (next: "light" | "dark") => void;
}
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;
