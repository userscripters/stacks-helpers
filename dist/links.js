/**
 * @see https://stackoverflow.design/product/components/links/
 *
 * @summary creates a Stacks link
 * @param {StacksLinksOptions} options configuration
 * @returns {HTMLAnchorElement | HTMLButtonElement}
 */
export const makeLink = (options = {}) => {
    const { href = "", isButton = false, type = "", blockLink = null, text, classes = [] } = options;
    const anchor = document.createElement(isButton ? "button" : "a");
    anchor.classList.add("s-link", ...classes);
    anchor.innerText = text;
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
    }
    if (href && anchor instanceof HTMLAnchorElement) {
        anchor.href = href;
    }
    return anchor;
};
