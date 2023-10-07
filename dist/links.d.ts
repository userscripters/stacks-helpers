import { StacksCommonOptions } from "./index";
export type StacksLinksOptions = StacksCommonOptions & {
    text: string;
    href?: string;
    isButton?: boolean;
    type?: "grayscale" | "muted" | "danger" | "inherit" | "underlined" | "visited" | "dropdown";
    blockLink?: {
        border?: "left" | "right";
        selected: boolean;
        danger?: boolean;
    };
    click?: {
        handler: EventListenerOrEventListenerObject;
        options?: boolean | AddEventListenerOptions;
    };
};
export declare const makeLink: (options?: StacksLinksOptions) => HTMLAnchorElement | HTMLButtonElement;
