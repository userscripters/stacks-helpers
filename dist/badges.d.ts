import { StacksCommonOptions } from "./index";
declare type BadgeTypes = "gold" | "silver" | "bronze" | "bounty" | "votes" | "answered" | "rep" | "rep-down" | "important" | "admin" | "moderator" | "staff" | "muted" | "filled" | "info" | "warning" | "danger";
export declare type StacksBadgesOptions = StacksCommonOptions & {
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
export {};
