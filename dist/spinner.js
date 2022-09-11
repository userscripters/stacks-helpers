"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSpinner = void 0;
/**
 * @see https://stackoverflow.design/product/components/spinner/
 *
 * @summary creates a Stacks spinner
 * @param {StacksSpinnerOptions} options configuration
 * @returns {HTMLDivElement}
 */
const makeSpinner = (options = {}) => {
    const { size = "", hiddenText = "", classes = [] } = options;
    const spinner = document.createElement("div");
    spinner.classList.add("s-spinner", ...classes);
    if (size) {
        spinner.classList.add(`s-spinner__${size}`);
    }
    if (hiddenText) {
        const hiddenElement = document.createElement("div");
        hiddenElement.classList.add("v-visible-sr");
        hiddenElement.innerText = hiddenText;
        spinner.append(hiddenElement);
    }
    return spinner;
};
exports.makeSpinner = makeSpinner;
