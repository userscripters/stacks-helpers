export const makeStacksBadge = (options) => {
    const { classes = [], blingColor = "", type = "", size = "", text, icon, } = options;
    const badge = document.createElement("span");
    badge.classList.add("s-badge", ...classes);
    if (type) {
        const typeClasses = type.map((name) => `s-badge__${name}`);
        badge.classList.add(...typeClasses);
    }
    if (size) {
        badge.classList.add(`s-badge__${size}`);
    }
    if (icon) {
        badge.classList.add("s-badge__icon");
        badge.append(icon, " ");
    }
    if (blingColor) {
        const bling = makeBling("span", blingColor, text);
        badge.append(bling);
    }
    else {
        badge.append(text);
    }
    return badge;
};
export const makeBling = (elementType, color, count) => {
    const element = document.createElement(elementType);
    element.classList.add("s-award-bling", `s-award-bling__${color}`);
    element.textContent = count;
    return element;
};
