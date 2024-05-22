"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeIndicator = void 0;
const index_1 = require("./index");
const makeIndicator = (options = {}) => {
    const { type = "", text = "", hiddenText = "", classes = [], iconConfig } = options;
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
        hiddenElement.textContent = hiddenText;
        indicator.append(hiddenElement);
    }
    if (iconConfig) {
        const { name, path, width, height } = iconConfig;
        const [icon] = index_1.Icons.makeStacksIcon(name, path, { width, height });
        const div = document.createElement("div");
        div.classList.add("ps-relative");
        indicator.classList.add("ps-absolute", "tn4", "rn4");
        div.append(icon, indicator);
        return div;
    }
    return indicator;
};
exports.makeIndicator = makeIndicator;
