import { StacksCommonOptions } from "./index";
export declare type StacksSpinnerOptions = StacksCommonOptions & {
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
export declare const makeSpinner: (options?: StacksSpinnerOptions) => HTMLDivElement;
