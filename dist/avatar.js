"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAvatar = void 0;
/**
 * @see https://stackoverflow.design/product/components/avatar/
 *
 * @summary creates a Stacks avatar
 * @param {StacksAvatarOptions} options configuration
 * @returns {HTMLAnchorElement}
 */
const makeAvatar = (options = {}, elementType = "a") => {
    const { size = "", href = "", src, classes = [] } = options;
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
exports.makeAvatar = makeAvatar;
