export const makeAvatar = (options = {}, elementType = "a") => {
    const { size = "", href = "", src, classes = [] } = options;
    const avatar = document.createElement(elementType);
    avatar.classList.add("s-avatar", ...classes);
    if (size) {
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
