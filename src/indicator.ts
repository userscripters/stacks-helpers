import { StacksCommonOptions } from "./index";

export type StacksIndicatorOptions = StacksCommonOptions & {
    type?: "success" | "warning" | "danger";
    text?: string;
    hiddenText?: string;
};

/**
 * @see https://stackoverflow.design/product/components/activity-indicator/
 *
 * @summary creates a Stacks activity indicator
 * @param {StacksIndicatorOptions} options configuration
 * @returns {HTMLDivElement}
 */
export const makeIndicator = (
    options = {} as StacksIndicatorOptions
): HTMLDivElement => {
    const {
        type = "",
        text = "",
        hiddenText = "",
        classes = []
    } = options;

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