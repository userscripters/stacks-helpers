import { StacksCommonOptions } from "./index";
export declare type StacksLabelOptions = StacksCommonOptions & {
    text: string;
    description?: string;
    parentClasses?: string[];
    statusText?: string;
    statusType?: "optional" | "required" | "new" | "beta";
};
/**
 * @see https://stackoverflow.com/product/components/labels/
 *
 * @summary creates a Stacks label
 * @param {string} forId the label htmlFor attribute
 * @param {StacksLabelOptions} labelOptions label configuration
 * @returns {HTMLDivElement | HTMLLabelElement}
 */
export declare const makeStacksLabel: (forId: string, labelOptions: StacksLabelOptions) => HTMLDivElement | HTMLLabelElement;
