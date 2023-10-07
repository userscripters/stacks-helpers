"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBling = exports.makeStacksBadge = void 0;
const makeStacksBadge = (options) => {
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
        const bling = (0, exports.makeBling)("span", blingColor, text);
        badge.append(bling);
    }
    else {
        badge.append(text);
    }
    return badge;
};
exports.makeStacksBadge = makeStacksBadge;
const makeBling = (elementType, color, count) => {
    const element = document.createElement(elementType);
    element.classList.add("s-award-bling", `s-award-bling__${color}`);
    element.innerText = count;
    return element;
};
exports.makeBling = makeBling;
