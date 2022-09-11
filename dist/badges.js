"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBling = exports.makeStacksBadge = void 0;
/**
 * @see https://stackoverflow.design/product/components/badges/
 *
 * @summary creates a Stacks badge
 * @param {StacksBadgesOptions} options configuration
 * @returns {HTMLSpanElement}
 */
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
/**
 * @summary Creates gold/silver/bronze bling
 * @param {keyof HTMLElementTagNameMap} elementType The type of the container element
 * @param {"gold" | "silver" | "bronze"} color The badge colour
 * @param {string} count The badge count
 * @returns {HTMLElement}
 */
const makeBling = (elementType, color, count) => {
    const element = document.createElement(elementType);
    element.classList.add("s-award-bling", `s-award-bling__${color}`);
    element.innerText = count;
    return element;
};
exports.makeBling = makeBling;
