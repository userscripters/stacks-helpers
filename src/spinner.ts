import { StacksCommonOptions } from "./index";

export type StacksSpinnerOptions = StacksCommonOptions & {
    /** The size of the spinner */
    size?: "xs" | "sm" | "md" | "lg";
    /** Text visible to screen readers */
    hiddenText?: string;
};

/**
 * @see https://stackoverflow.design/product/components/spinner/
 *
 * @summary creates a Stacks spinner
 * @param {StacksSpinnerOptions} options configuration
 * @returns {HTMLDivElement}
 */
export const makeSpinner = (
    options = {} as StacksSpinnerOptions
): HTMLDivElement => {
    const {
        size = "",
        hiddenText = "",
        classes = []
    } = options;

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