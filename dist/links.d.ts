import { StacksCommonOptions } from "./index";
export declare type StacksLinksOptions = StacksCommonOptions & {
    text: string;
    href?: string;
    isButton?: boolean;
    type?: "grayscale" | "muted" | "danger" | "inherit" | "underlined" | "visited" | "dropdown";
    blockLink?: {
        border?: "left" | "right";
        selected: boolean;
        danger?: boolean;
    };
};
/**
 * @see https://stackoverflow.design/product/components/links/
 *
 * @summary creates a Stacks link
 * @param {StacksLinksOptions} options configuration
 * @returns {HTMLAnchorElement | HTMLButtonElement}
 */
export declare const makeLink: (options?: StacksLinksOptions) => HTMLAnchorElement | HTMLButtonElement;
