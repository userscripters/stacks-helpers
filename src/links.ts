import { StacksCommonOptions } from "./index";

export type StacksLinksOptions = StacksCommonOptions & {
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
    },
    /** `click` listener configuration */
    click?: {
        /** Handler called when the anchor is clicked */
        handler: EventListenerOrEventListenerObject;
        /** The third argument to `.addEventListener()` */
        options?: boolean | AddEventListenerOptions;
    }
};

/**
 * @see https://stackoverflow.design/product/components/links/
 *
 * @summary creates a Stacks link
 * @param {StacksLinksOptions} options configuration
 * @returns {HTMLAnchorElement | HTMLButtonElement}
 */
export const makeLink = (
    options = {} as StacksLinksOptions
): HTMLAnchorElement | HTMLButtonElement => {
    const {
        href = "",
        isButton = false,
        type = "",
        blockLink = null,
        text,
        click,
        classes = []
    } = options;

    const anchor = document.createElement(isButton ? "button" : "a");
    anchor.classList.add("s-link", ...classes);
    anchor.textContent = text;

    if (type) {
        anchor.classList.add(`s-link__${type}`);
    }

    if (blockLink) {
        anchor.classList.add("s-block-link");
        anchor.classList.remove("s-link");

        if (blockLink.border) {
            anchor.classList.add(`s-block-link__${blockLink.border}`);
        }

        if (blockLink.selected) {
            anchor.classList.add("is-selected");
        }

        if (blockLink.danger) {
            anchor.classList.add("s-block-link__danger");
        }
    }

    if (href && anchor instanceof HTMLAnchorElement) {
        anchor.href = href;
    }

    if (click) {
        const { handler, options } = click;

        anchor.addEventListener("click", handler, options);
    }

    return anchor;
};