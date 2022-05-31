import { StacksCommonOptions } from "./index";
export declare type StacksIndicatorOptions = StacksCommonOptions & {
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
export declare const makeIndicator: (options?: StacksIndicatorOptions) => HTMLDivElement;
