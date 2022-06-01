import { StacksCommonOptions } from "./index";
export declare type StacksLinksOptions = StacksCommonOptions & {
    /** The anchor text */
    text: string;
    /** The href of the link */
    href?: string;
    /** Whether the link is a button */
    isButton?: boolean;
    /** The colour of the link */
    type?: "grayscale" | "muted" | "danger" | "inherit" | "underlined" | "visited" | "dropdown";
    /** `s-block-link` configuration */
    blockLink?: {
        /** Whether the border must be on the left or right side (default none) */
        border?: "left" | "right";
        /** Whether to apply the `is-selected` class to the link */
        selected: boolean;
        /** Whether to style the link as dangerous */
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
