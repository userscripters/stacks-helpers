"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showToast = exports.hideToast = exports.toggleToast = exports.makeStacksToast = void 0;
const index_1 = require("../icons/index");
/**
 * @see https://stackoverflow.design/product/components/notices/
 *
 * @summary builder for Stacks notifications
 * @param {string} id the toast id
 * @param {string} text the message text
 */
const makeStacksToast = (id, text, { buttons = [], classes = [], msgClasses = [], type = "none", important = false, } = {}) => {
    const wrap = document.createElement("div");
    wrap.classList.add("s-toast", ...classes);
    wrap.setAttribute("aria-hidden", "true");
    wrap.setAttribute("role", "alertdialog");
    wrap.setAttribute("aria-labelledby", "notice-message");
    wrap.id = id;
    const aside = document.createElement("aside");
    aside.classList.add("s-notice", "p8", "pl16");
    if (type !== "none")
        aside.classList.add(`s-notice__${type}`);
    if (important)
        aside.classList.add("s-notice__important");
    const msgWrap = document.createElement("div");
    msgWrap.classList.add("d-flex", "gs16", "gsx", "ai-center", "jc-space-between", ...msgClasses);
    const message = document.createElement("div");
    message.classList.add("flex--item");
    message.textContent = text;
    const btnWrap = document.createElement("div");
    btnWrap.classList.add("d-flex");
    const dismissBtn = document.createElement("button");
    dismissBtn.type = "button";
    dismissBtn.classList.add("s-btn", "s-notice--btn");
    dismissBtn.setAttribute("aria-label", "Dismiss");
    buttons.push(dismissBtn);
    const [dismissIcon] = (0, index_1.makeStacksIcon)("iconClearSm", "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41z");
    dismissBtn.append(dismissIcon);
    btnWrap.append(...buttons);
    msgWrap.append(message, btnWrap);
    aside.append(msgWrap);
    wrap.append(aside);
    return wrap;
};
exports.makeStacksToast = makeStacksToast;
/**
 * @summary toggles the Stacks toast visibility
 */
const toggleToast = (target, show) => {
    const toast = typeof target === "string" ? document.querySelector(target) : target;
    if (!toast)
        throw new ReferenceError(`missing toast: ${target}`);
    const isShown = (toast === null || toast === void 0 ? void 0 : toast.getAttribute("aria-hidden")) !== "true";
    toast.setAttribute("aria-hidden", (show !== void 0 ? !show : isShown).toString());
    return toast;
};
exports.toggleToast = toggleToast;
/**
 * @summary hides the Stacks toast
 */
const hideToast = (target, hideFor) => {
    const toast = (0, exports.toggleToast)(target, false);
    if (hideFor)
        setTimeout(() => (0, exports.showToast)(toast), hideFor * 1e3);
};
exports.hideToast = hideToast;
/**
 * @summary shows the Stacks toast
 */
const showToast = (target, showFor) => {
    const toast = (0, exports.toggleToast)(target, true);
    if (showFor)
        setTimeout(() => (0, exports.hideToast)(toast), showFor * 1e3);
};
exports.showToast = showToast;
