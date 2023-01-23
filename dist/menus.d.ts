import { StacksCommonOptions, Input, Links } from "./index";
type BasicPlacement = "auto" | "top" | "right" | "bottom" | "left";
type AllPlacements = BasicPlacement | `${BasicPlacement}-start` | `${BasicPlacement}-end`;
declare global {
    namespace Stacks {
        function setTooltipHtml(element: Element, html: string, options?: {
            placement: AllPlacements;
        }): void;
    }
}
export type MenuItemPopover = {
    /** Attached popover config */
    popover?: {
        /** Stringified HTML/text to append */
        html: string;
        /** The popover's position */
        position?: AllPlacements;
    };
};
export type MenuItem = Omit<Links.StacksLinksOptions, "isButton"> & MenuItemPopover | {
    /** The type of the separator (divider or title) */
    separatorType: "divider" | "title";
    /** The title (pass only if `type` is `title`) */
    separatorText?: string;
} | {
    /** Checkbox info */
    checkbox: Input.StacksInputTypes;
    /** Input config */
    checkboxOptions?: Input.StacksRadioCheckboxOptions;
} & MenuItemPopover;
export type StacksMenuOptions = StacksCommonOptions & {
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
