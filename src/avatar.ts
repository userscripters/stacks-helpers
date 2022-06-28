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
    options = {} as StacksAvatarOptions,
    elementType: keyof HTMLElementTagNameMap = "a"
): HTMLElement => {
    const {
        size = "",
        href = "",
        src,
        classes = []
    } = options;

    const avatar = document.createElement(elementType);
    avatar.classList.add("s-avatar", ...classes);

    if (size) { // default 16px
        avatar.classList.add(`s-avatar__${size}`);
    }

    if (href && avatar instanceof HTMLAnchorElement) {
        avatar.href = href;
    }

    const img = document.createElement("img");
    img.classList.add("s-avatar--image");
    img.src = src;

    avatar.append(img);

    return avatar;
};