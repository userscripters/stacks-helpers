import { StacksCommonOptions } from "./index";
export declare type StacksNavItems = StacksCommonOptions & {
    /** The item text */
    text: string;
    /** The item id */
    id: string;
    /** The id of the element the item controls */
    ariaControls?: string;
};
/**
 * @see https://stackoverflow.design/product/components/navigation/
 *
 * @summary creates a Stacks navigation component
 * @param {StacksNavItems[]} navItems the children of the nav element
 * @param {"button" | "a"} type whether in-page navigation is used
 * @param {number} selectIndex the index of the item to select
 * @returns {HTMLElementTagNameMap["nav"]}
 */
export declare const makeNavigation: (navItems: StacksNavItems[], type: "button" | "a", selectIndex?: number) => HTMLElement;
