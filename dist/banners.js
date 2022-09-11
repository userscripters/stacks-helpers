"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksBanner = void 0;
const index_1 = require("./index");
/**
 * @see https://stackoverflow.design/product/components/banners/
 *
 * @summary Creates a Stacks banner
 * @param {StacksBannerOptions} options configuration
 * @returns {HTMLElement}
 */
const makeStacksBanner = (options) => {
    const { style, text, important = false, pinned = false, icon, classes = [], } = options;
    const banner = document.createElement("aside");
    banner.classList.add("s-banner", `s-banner__${style}`, "js-notice-banner", ...classes);
    banner.setAttribute("role", "alert");
    if (important) {
        banner.classList.add("s-banner__important");
    }
    if (pinned) {
        banner.classList.add("is-pinned");
    }
    const container = document.createElement("div");
    container.classList.add("d-flex", "flex__center", "jc-space-between", "s-banner--container");
    container.setAttribute("role", "alertdialog");
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("d-flex", "g8");
    if (icon) {
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("flex--item");
        const [name, path] = icon;
        const [svgIcon] = index_1.Icons.makeStacksIcon(name, path, { width: 18 });
        iconContainer.append(svgIcon);
        mainContainer.append(iconContainer);
    }
    const textContainer = document.createElement("div");
    textContainer.classList.add("d-flex", "ai-center");
    const textElement = document.createElement("p");
    textElement.classList.add("m0");
    textElement.append(text);
    textContainer.append(textElement);
    mainContainer.append(textContainer);
    const closeContainer = document.createElement("div");
    closeContainer.classList.add("flex--item", "ml-auto", "myn8");
    const closeButton = document.createElement("a");
    closeButton.classList.add("p8", "s-btn", "d-flex", "flex__center", "fc-dark", "js-notice-close");
    closeButton.setAttribute("role", "status");
    const [svgClose] = index_1.Icons.makeStacksIcon("iconClearSm", "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z", { classes: ["m0"] });
    closeButton.append(svgClose);
    closeContainer.append(closeButton);
    container.append(mainContainer, closeContainer);
    banner.append(container);
    return banner;
};
exports.makeStacksBanner = makeStacksBanner;
