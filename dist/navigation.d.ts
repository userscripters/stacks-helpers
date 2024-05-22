import { StacksCommonOptions } from "./index";
type NavDivider = {
    title: string;
};
type NavItem = StacksCommonOptions & {
    text: string;
    id?: string;
    ariaControls?: string;
    dropdown?: boolean;
    href?: string;
};
type StacksNavItems = NavItem | NavDivider;
export type StacksNavigationOptions = StacksCommonOptions & {
    navItems: StacksNavItems[];
    type?: "button" | "a";
    selectIndex?: number;
    ariaLabel?: string;
    navType?: "muted" | "scroll" | "sm" | "vertical";
};
export declare const makeNavigation: (options?: StacksNavigationOptions) => HTMLElement;
export declare const createNavItem: ({ id, text, ariaControls, dropdown, href, classes }: NavItem, type: "button" | "a", select: boolean) => HTMLLIElement;
export {};
