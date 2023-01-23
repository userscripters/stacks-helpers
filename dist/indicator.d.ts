import { StacksCommonOptions } from "./index";
export type StacksIndicatorOptions = StacksCommonOptions & {
    /** The type of the indicator. Default is "info" (not passed) */
    type?: "success" | "warning" | "danger";
    /** The text inside the indicator */
    text?: string;
    /** Text visible to screen readers */
    hiddenText?: string;
};
/**
 * @see https://stackoverflow.design/product/components/activity-indicator/
 *
 * @summary creates a Stacks activity indicator
 * @param {StacksIndicatorOptions} options configuration
 * @returns {HTMLDivElement}
 */
export declare const makeIndicator: (options?: StacksIndicatorOptions) => HTMLDivElement;
