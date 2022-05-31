/**
 * @see https://stackoverflow.com/product/components/avatar/
 *
 * @summary creates a Stacks avatar
 * @param {StacksAvatarOptions} options configuration
 * @returns {HTMLAnchorElement}
 */
export const makeAvatar = (options = {}) => {
    const { size = "", href = "", src, classes = [] } = options;
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
