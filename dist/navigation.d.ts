import { StacksCommonOptions } from "./index";
export type StacksNavItems = StacksCommonOptions & {
    text: string;
    id: string;
    ariaControls?: string;
};
export declare const makeNavigation: (navItems: StacksNavItems[], type: "button" | "a", selectIndex?: number) => HTMLElement;
