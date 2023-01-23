import { StacksCommonOptions } from "./index";
export type StacksLabelOptions = StacksCommonOptions & {
    /** The text of the label (HTML allowed) */
    text: string;
    /** An optional description (HTML allowed) */
    description?: string;
    /** Classes applied to the label container */
    parentClasses?: string[];
    /** The text of the optional badge after the label (HTML allowed) */
    statusText?: string;
    /** The style of the optional badge after the label */
    statusType?: "optional" | "required" | "new" | "beta";
};
/**
 * @see https://stackoverflow.design/product/components/labels/
 *
 * @summary creates a Stacks label
 * @param {string} forId the label htmlFor attribute
 * @param {StacksLabelOptions} labelOptions label configuration
 * @returns {HTMLDivElement | HTMLLabelElement}
 */
export declare const makeStacksLabel: (forId: string, labelOptions: StacksLabelOptions) => HTMLDivElement | HTMLLabelElement;
