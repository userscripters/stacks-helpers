import { StacksCommonOptions } from "./index";
type PopoverPlacement = "auto" | "top" | "right" | "bottom" | "left";
export type StacksPopoverOptions = StacksCommonOptions & {
    referenceSelector?: string;
    toggleClass?: string;
    placement?: PopoverPlacement | `${PopoverPlacement}-start` | `${PopoverPlacement}-end`;
    autoShow?: boolean;
    toggle?: boolean;
    hideOnOutsideClick?: "always" | "never" | "if-in-viewport" | "after-dismissal";
    manualArrowPositioning?: "tc" | "tl" | "tr" | "bc" | "bl" | "br" | "rc" | "rt" | "rb" | "lc" | "lt" | "lb";
    contentHtml: string;
    callbacks: {
        show: (event: Event) => void;
        shown: (event: Event) => void;
        hide: (event: Event) => void;
        hidden: (event: Event) => void;
    };
};
export declare const makeStacksPopover: (id: string, controller: HTMLElement, options: StacksPopoverOptions) => HTMLDivElement;
export {};
