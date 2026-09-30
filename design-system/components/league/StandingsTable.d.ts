import * as React from "react";

export interface StandingsRow {
  rank?: number | string; team?: string; played?: number | string;
  won?: number | string; lost?: number | string; sets?: string; points?: number | string;
  [key: string]: unknown;
}
export interface StandingsColumn { key: string; label: string; align?: "left" | "right" | "center"; width?: number }
/**
 * League table with petrol head row, two-grey zebra body and chamfered petrol frame.
 * @startingPoint section="Liga" subtitle="Tabelle with zebra rows and promotion zones" viewport="700x380"
 */
export interface StandingsTableProps extends React.HTMLAttributes<HTMLDivElement> {
  rows?: StandingsRow[];
  /** override the default #/Team/SP/S/N/SV/PKT columns */
  columns?: StandingsColumn[];
  /** team name to highlight (the viewer's own team) */
  highlightTeam?: string;
  caption?: string;
  /** number of top rows marked as Aufstieg (petrol bar) */
  promotion?: number;
  /** number of bottom rows marked as Abstieg (orange bar) */
  relegation?: number;
  /** min table width in px before horizontal scroll kicks in; defaults to 74 px per column (min 240) */
  minWidth?: number;
}
export function StandingsTable(props: StandingsTableProps): JSX.Element;
