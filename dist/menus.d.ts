import { StacksCommonOptions } from "./index";
import { Links } from "./index";
declare type NavItem = Omit<Links.StacksLinksOptions, "isButton"> | {
    type: "divider" | "title";
    text?: string;
};
export declare type StacksMenuOptions = StacksCommonOptions & {
    itemsType?: "a" | "button";
    childrenClasses?: string[];
    navItems: NavItem[];
};
/**
 * @see https://stackoverflow.design/product/components/menus/
 *
 * @summary creates a Stacks menu
 * @param {StacksMenuOptions} options configuration
 * @returns {HTMLUListElement}
 */
export declare const makeMenu: (options?: StacksMenuOptions) => HTMLUListElement;
export {};
