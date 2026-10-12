import * as React from "react";

/**
 * Courtside score stepper for the digitaler Spielberichtsbogen — huge numerals, 44 px targets, thumb-reachable.
 * @startingPoint section="Liga" subtitle="Courtside set-score stepper" viewport="700x220"
 */
export interface SetScoreInputProps extends React.HTMLAttributes<HTMLDivElement> {
  setNumber?: number;
  home?: number;
  away?: number;
  onChange?: (next: { home: number; away: number }) => void;
  homeLabel?: string;
  awayLabel?: string;
  disabled?: boolean;
}
export function SetScoreInput(props: SetScoreInputProps): JSX.Element;
