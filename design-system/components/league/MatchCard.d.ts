import * as React from "react";

/**
 * One fixture / result. Deliberately shows date, time, level and teams — never the venue (Safe Space).
 * @startingPoint section="Liga" subtitle="Fixture and result card" viewport="700x200"
 */
export interface MatchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: string;
  time?: string;
  level?: string;
  region?: string;
  home?: string;
  away?: string;
  homeSets?: number | string;
  awaySets?: number | string;
  status?: "geplant" | "läuft" | "gespielt";
  /** individual set scores, e.g. ["25:21","23:25","15:12"] */
  sets?: string[];
}
export function MatchCard(props: MatchCardProps): JSX.Element;
