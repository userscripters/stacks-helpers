import { StacksCommonOptions } from "./index";
type BadgeTypes = "gold" | "silver" | "bronze" | "bounty" | "votes" | "answered" | "rep" | "rep-down" | "important" | "admin" | "moderator" | "staff" | "muted" | "filled" | "info" | "warning" | "danger";
export type StacksBadgesOptions = StacksCommonOptions & {
    /** The type of the bling */
    blingColor?: "gold" | "silver" | "bronze";
    /** The type of the badge */
    type?: BadgeTypes[];
    /** The size of the badge (SMall or eXtra Small) */
    size?: "sm" | "xs";
    /** The text in the badge */
    text: string;
    /** SVG icon attached to the badge */
    icon?: HTMLElement;
};
/**
 * @see https://stackoverflow.design/product/components/badges/
 *
 * @summary creates a Stacks badge
 * @param {StacksBadgesOptions} options configuration
 * @returns {HTMLSpanElement}
 */
export declare const makeStacksBadge: (options: StacksBadgesOptions) => HTMLSpanElement;
/**
 * @summary Creates gold/silver/bronze bling
 * @param {keyof HTMLElementTagNameMap} elementType The type of the container element
 * @param {"gold" | "silver" | "bronze"} color The badge colour
 * @param {string} count The badge count
 * @returns {HTMLElement}
 */
export declare const makeBling: (elementType: keyof HTMLElementTagNameMap, color: "gold" | "silver" | "bronze", count: string) => HTMLElement;
export {};
