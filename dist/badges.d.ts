import { StacksCommonOptions } from "./index";
export declare type StacksBadgesOptions = StacksCommonOptions & {
    blingColor?: "gold" | "silver" | "bronze";
    type?: "gold" | "silver" | "bronze" | "bounty" | "votes" | "answered" | "rep" | "rep-down" | "important" | "admin" | "moderator" | "staff";
    size?: "sm" | "xs";
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
