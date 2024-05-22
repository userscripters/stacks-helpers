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
    popover?: {
        html: string;
        position?: AllPlacements;
    };
};
export type MenuItem = Links.StacksLinksOptions & MenuItemPopover | {
    separatorType: "divider" | "title";
    separatorText?: string;
} | {
    checkbox: Input.StacksInputTypes;
    checkboxOptions?: Input.StacksRadioCheckboxOptions;
} & MenuItemPopover;
export type StacksMenuOptions = StacksCommonOptions & {
    itemsType?: "a" | "button";
    childrenClasses?: string[];
    navItems: MenuItem[];
};
export declare const makeMenu: (options?: StacksMenuOptions) => HTMLUListElement;
export {};
