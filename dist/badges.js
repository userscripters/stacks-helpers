/**
 * @see https://stackoverflow.design/product/components/badges/
 *
 * @summary creates a Stacks badge
 * @param {StacksBadgesOptions} options configuration
 * @returns {HTMLSpanElement}
 */
export const makeBadge = (options) => {
    const { classes = [], blingColor = "", type = "", size = "", text, } = options;
    const badge = document.createElement("span");
    badge.classList.add("s-badge", ...classes);
    if (type) {
        badge.classList.add(`s-badge__${type}`);
    }
    if (size) {
        badge.classList.add(`s-badge__${size}`);
    }
    if (blingColor) {
        const bling = document.createElement("span");
        bling.classList.add("s-award-bling", `s-award-bling__${blingColor}`);
        bling.innerText = text;
        badge.append(bling);
    }
    else {
        badge.innerText = text;
    }
    return badge;
};
