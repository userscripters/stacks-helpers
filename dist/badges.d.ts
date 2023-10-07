import { StacksCommonOptions } from "./index";
type BadgeTypes = "gold" | "silver" | "bronze" | "bounty" | "votes" | "answered" | "rep" | "rep-down" | "important" | "admin" | "moderator" | "staff" | "muted" | "filled" | "info" | "warning" | "danger";
export type StacksBadgesOptions = StacksCommonOptions & {
    blingColor?: "gold" | "silver" | "bronze";
    type?: BadgeTypes[];
    size?: "sm" | "xs";
    text: string;
    icon?: HTMLElement;
};
export declare const makeStacksBadge: (options: StacksBadgesOptions) => HTMLSpanElement;
export declare const makeBling: (elementType: keyof HTMLElementTagNameMap, color: "gold" | "silver" | "bronze", count: string) => HTMLElement;
export {};
