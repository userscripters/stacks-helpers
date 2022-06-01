import { StacksCommonOptions } from "./index";

export type StacksAvatarOptions = StacksCommonOptions & {
    /** The size of the avatar */
    size?: 24 | 32 | 48 | 64 | 96 | 128;
    /** The link that the avatar should redirect when clicked */
    href?: string;
    /** The source of the image */
    src: string;
};

/**
 * @see https://stackoverflow.design/product/components/avatar/
 *
 * @summary creates a Stacks avatar
 * @param {StacksAvatarOptions} options configuration
 * @returns {HTMLAnchorElement}
 */
export const makeAvatar = (
    options = {} as StacksAvatarOptions
): HTMLAnchorElement => {
    const {
        size = "",
        href = "",
        src,
        classes = []
    } = options;

    const anchor = document.createElement("a");
    anchor.classList.add("s-avatar", ...classes);

    if (size) { // default 16px
        anchor.classList.add(`s-avatar__${size}`);
    }

    if (href) {
        anchor.href = href;
    }

    const img = document.createElement("img");
    img.classList.add("s-avatar--image");
    img.src = src;

    anchor.append(img);

    return anchor;
};