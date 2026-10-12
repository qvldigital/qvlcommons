import * as React from "react";

/** Roster line: shirt number, name, self-chosen pronouns, role, registration status. */
export interface PlayerRowProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: number | string;
  name?: string;
  /** self-chosen pronouns, always shown when supplied */
  pronouns?: string;
  role?: string;
  status?: string;
  action?: React.ReactNode;
  /** zebra alternate background */
  alt?: boolean;
}
export function PlayerRow(props: PlayerRowProps): JSX.Element;
