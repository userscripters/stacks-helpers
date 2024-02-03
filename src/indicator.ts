import { StacksCommonOptions } from "./index";
import { Icons } from "./index";

export type StacksIndicatorOptions = StacksCommonOptions & {
    /** The type of the indicator. Default is "info" (not passed) */
    type?: "success" | "warning" | "danger";
    /** The text inside the indicator */
    text?: string;
    /** Text visible to screen readers */
    hiddenText?: string;
    /** Configuration of an optionally prepended SVG icon */
    iconConfig?: {
        /** The name of the SVG */
        name: string;
        /** The path of the SVG */
        path: string;
        /** The width of the SVG */
        width?: number;
        /** The height of the SVG */
        height?: number;
    };
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
        classes = [],
        iconConfig
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
        hiddenElement.textContent = hiddenText;

        indicator.append(hiddenElement);
    }

    if (iconConfig) {
        const { name, path, width, height } = iconConfig;
        const [icon] = Icons.makeStacksIcon(name, path, { width, height });

        const div = document.createElement("div");
        div.classList.add("ps-relative");

        indicator.classList.add("ps-absolute", "tn4", "rn4");

        div.append(icon, indicator);

        return div;
    }

    return indicator;
};