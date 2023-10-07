"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeIndicator = void 0;
const makeIndicator = (options = {}) => {
    const { type = "", text = "", hiddenText = "", classes = [] } = options;
    const indicator = document.createElement("div");
    indicator.classList.add("s-activity-indicator", ...classes);
    if (type) {
        indicator.classList.add(`s-activity-indicator__${type}`);
    }
    if (text) {
        indicator.append(text);
    }
    if (hiddenText) {
        const hiddenElement = document.createElement("div");
        hiddenElement.classList.add("v-visible-sr");
        hiddenElement.innerText = hiddenText;
        indicator.append(hiddenElement);
    }
    return indicator;
};
exports.makeIndicator = makeIndicator;
