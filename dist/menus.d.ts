import { StacksCommonOptions, Links } from "./index";
declare type MenuItem = Omit<Links.StacksLinksOptions, "isButton"> & {
    /** The type of the separator (divider or title) */
    separatorType: "divider" | "title";
    /** The title (pass only if `type` is `title`) */
    separatorText?: string;
};
export declare type StacksMenuOptions = StacksCommonOptions & {
    /** The type of the menu items */
    itemsType?: "a" | "button";
    /** Classes applied to all the menu items */
    childrenClasses?: string[];
    /** The menu items */
    navItems: MenuItem[];
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
