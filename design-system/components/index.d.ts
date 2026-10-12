import * as React from "react";

/**
 * Full-bleed hero using the CI net-and-ball artwork. Text sits in the empty upper-left field of the image.
 * @startingPoint section="Brand" subtitle="Full-bleed net hero with eyebrow, headline and CTAs" viewport="700x380"
 */
export interface NetHeroProps extends React.HTMLAttributes<HTMLElement> {
  /** which supplied net background to use */
  background?: "grey-petrol" | "grey-orange" | "grey-yellow" | "grey-grey" | "petrol-grey" | "petrol-petrol" | "orange-petrol" | "orange-petrol-v2";
  eyebrow?: string;
  title?: string;
  lead?: string;
  actions?: React.ReactNode;
  align?: "left" | "center";
  minHeight?: number;
  /** force white or petrol text instead of the automatic choice */
  inkOnDark?: boolean;
}
export function NetHero(props: NetHeroProps): JSX.Element;

/**
 * Fillable net-and-ball background: CSS mesh + a tiled real ball icon over a flat or two-tone
 * CI gradient. For filling arbitrary website sections where the fixed HINTERGRUND_* artwork
 * doesn't fit the aspect ratio.
 * @startingPoint section="Brand" subtitle="Generative net + ball background fill" viewport="700x220"
 */
export interface NetPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  /** flat CI colour or a two-tone diagonal gradient between CI colours */
  base?: "petrol" | "orange" | "petrol-orange" | "orange-petrol" | "petrol-mid" | "pink" | "petrol-pink" | "pink-petrol" | "orange-pink" | "grey";
  /** tint of the tiled ball icon */
  ball?: "petrol" | "petrol-dark" | "orange" | "white";
  /** 0–1, opacity of the white net mesh lines */
  meshOpacity?: number;
  /** 0–1, opacity of the tiled ball icon layer */
  ballOpacity?: number;
  /** tiled ball icon size in px */
  ballSize?: number;
  /** net mesh cell size in px */
  mesh?: number;
  children?: React.ReactNode;
}
export function NetPattern(props: NetPatternProps): JSX.Element;

/**
 * Decorative icon-in-the-net pattern band (documents/info, table/medal, gear/cards).
 * @startingPoint section="Brand" subtitle="Icon-net pattern band with white text plate" viewport="700x200"
 */
export interface PatternBandProps extends React.HTMLAttributes<HTMLDivElement> {
  pattern?: "documents" | "table" | "gear";
  height?: number;
  /** wrap children in a solid white chamfered plate so text stays legible on the pattern */
  plate?: boolean;
  children?: React.ReactNode;
}
export function PatternBand(props: PatternBandProps): JSX.Element;

/** Small uppercase status/label chip. Not interactive — use `Tag` for removable filters. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "petrol" | "orange" | "pink" | "pink-soft" | "outline" | "soft" | "grey" | "yellow" | "highlight";
  /** yellow = yellow border; highlight = yellow fill + ink text ("Live", "Platz 1") */
  size?: "sm" | "md";
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;

/**
 * Primary action control. Bebas Neue uppercase label in a chamfered block — never rounded.
 * @startingPoint section="Core" subtitle="Chamfered block buttons in all four variants" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** petrol solid (default) | orange solid | pink solid | petrol outline | text only */
  variant?: "primary" | "accent" | "pink" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** renders an <a> instead of a <button> */
  href?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;

/**
 * Chamfered content panel. Flat — no blur, no soft shadow; `block` adds the solid 6 px offset shadow.
 * @startingPoint section="Core" subtitle="Chamfered card tones with optional block shadow" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** tiefe/pride/sunset/flutlicht are gradient feature cards — one per view, never in lists */
  tone?: "default" | "brand" | "soft" | "accent" | "pink" | "tiefe" | "pride" | "sunset" | "flutlicht";
  /** colour of the block shadow (default petrol) */
  blockColor?: "petrol" | "orange" | "pink";
  /** 2 px edge in the tone's border colour (default true) */
  border?: boolean;
  /** solid petrol offset shadow instead of flat */
  block?: boolean;
  /** chamfer size in px, default 12 */
  ch?: number;
  padding?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;

/** Lucide glyph rendered as a CSS mask so it inherits `currentColor`. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** kebab-case Lucide icon name, e.g. "calendar-days" */
  name: string;
  size?: number;
  color?: string;
  /** provide only when the icon carries meaning on its own */
  label?: string;
}
export function Icon(props: IconProps): JSX.Element;

/** The CI volleyball mark. */
export interface BallIconProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: number;
  tone?: "petrol" | "petrol-dark" | "orange" | "white";
}
export function BallIcon(props: BallIconProps): JSX.Element;

/** Square chamfered button holding a single icon. Always needs `label` for screen readers. */
export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "pink" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** accessible name, also used as the tooltip */
  label: string;
  children?: React.ReactNode;
}
export function IconButton(props: IconButtonProps): JSX.Element;

/** The QVL wordmark / icon. Never recolour, outline or redraw it — use the supplied files. */
export interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  /** long lockup on light (default), long lockup with orange "Queer", short lockup, or the QVL icon */
  variant?: "long-petrol" | "long-orange" | "short" | "icon";
  height?: number;
}
export function Logo(props: LogoProps): JSX.Element;

/** Filter / selection chip. Toggleable via `selected` + `onClick`, dismissible via `onRemove`. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;

/** Light/dark switch (sun/moon icon button). Uncontrolled it drives window.QVLTheme (theme.js); pass mode+onChange to control it. */
export interface ThemeToggleProps extends Omit<React.HTMLAttributes<HTMLButtonElement>,"onChange"> {
  mode?: "light" | "dark";
  onChange?: (next: "light" | "dark") => void;
}
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;

/**
 * Inline message block. `tone="safe"` is the Safe-Space notice — white with a yellow border.
 * @startingPoint section="Feedback" subtitle="Inline alerts incl. the Safe-Space notice" viewport="700x320"
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "success" | "warn" | "danger" | "safe";
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;

/** Modal with a petrol 3 px frame, orange block shadow and a petrol scrim. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  children?: React.ReactNode;
}
export function Dialog(props: DialogProps): JSX.Element | null;

/** Friendly blank slate using the brand volleyball as illustration. */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}
export function EmptyState(props: EmptyStateProps): JSX.Element;

/** Transient confirmation. Petrol by default; orange only for destructive undo. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "petrol" | "orange" | "pink";
  message?: React.ReactNode;
  action?: string;
  onAction?: () => void;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;

/** Fixed bottom-centre container for toasts. */
export interface ToastStackProps extends React.HTMLAttributes<HTMLDivElement> { children?: React.ReactNode }
export function ToastStack(props: ToastStackProps): JSX.Element;

/** Short hover/focus hint. Desktop affordance only — never the sole carrier of information on the PWA. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  placement?: "top" | "bottom";
  children?: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;

/** Chamfered checkbox with optional description line. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
}
export function Checkbox(props: CheckboxProps): JSX.Element;

/** Single- or multi-line text field. Focus shows the yellow 3 px ring; errors switch it to orange. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}
export function Input(props: InputProps): JSX.Element;

/** Single-choice control; the selected dot is orange inside a petrol chamfered frame. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
}
export function Radio(props: RadioProps): JSX.Element;

export interface RadioGroupProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  legend?: string;
  children?: React.ReactNode;
}
export function RadioGroup(props: RadioGroupProps): JSX.Element;

export interface SelectOption { value: string; label: string }
/** Native select in QVL shell with a chamfered petrol caret. Used for Level, Region, Sprache, Saison. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  options?: (SelectOption | string)[];
  placeholder?: string;
}
export function Select(props: SelectProps): JSX.Element;

/** Instant-apply toggle (notifications, visibility). Use `Checkbox` inside forms that are saved explicitly. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
}
export function Switch(props: SwitchProps): JSX.Element;

/** Level letter (A–D) plus optional region / Spielklasse, as two chamfered blocks. */
export interface LevelBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "A" | "B" | "C" | "D" */
  level: string;
  /** Nord | Ost | Süd | West | Mitte */
  region?: string;
  /** e.g. "FLINTA*", "Senior*innen" */
  klasse?: string;
  size?: "sm" | "md" | "lg";
}
export function LevelBadge(props: LevelBadgeProps): JSX.Element;

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

export interface BottomNavItem { value: string; label: string; icon?: React.ReactNode }
/** PWA bottom bar — 44 px minimum targets, active item marked in orange. */
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: BottomNavItem[];
  value?: string;
  onChange?: (value: string) => void;
}
export function BottomNav(props: BottomNavProps): JSX.Element;

export interface BreadcrumbItem { value: string; label: string }
/** Path trail for deep league views (Liga → Level B → Gruppe Nord). */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items?: (BreadcrumbItem | string)[];
  onNavigate?: (value: string) => void;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;

export interface FooterColumn { title: string; links: string[] }
/** Petrol footer with the white logo plate, orange column headings and a short association note. */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  note?: string;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;

export interface NavItem { value: string; label: string }
/**
 * Petrol top bar with the white logo plate, uppercase nav, language switcher and one orange CTA.
 * @startingPoint section="Navigation" subtitle="Petrol site header with language switcher" viewport="700x120"
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  items?: (NavItem | string)[];
  active?: string;
  onNavigate?: (value: string) => void;
  language?: string;
  languages?: string[];
  onLanguage?: (code: string) => void;
  /** label of the single orange CTA */
  cta?: string;
  /** mobile layout: burger menu instead of inline nav */
  compact?: boolean;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;

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
