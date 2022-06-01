import { StacksCommonOptions } from "./index";
export declare type StacksBadgesOptions = StacksCommonOptions & {
    /** The type of the bling */
    blingColor?: "gold" | "silver" | "bronze";
    /** The type of the badge */
    type?: "gold" | "silver" | "bronze" | "bounty" | "votes" | "answered" | "rep" | "rep-down" | "important" | "admin" | "moderator" | "staff";
    /** The size of the badge (SMall or eXtra Small) */
    size?: "sm" | "xs";
    /** The text in the badge */
    text: string;
};
/**
 * @see https://stackoverflow.design/product/components/badges/
 *
 * @summary creates a Stacks badge
 * @param {StacksBadgesOptions} options configuration
 * @returns {HTMLSpanElement}
 */
export declare const makeBadge: (options: StacksBadgesOptions) => HTMLSpanElement;
