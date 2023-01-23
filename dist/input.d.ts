import { StacksCommonOptions, Label } from "./index";
export type StacksInputOptions = StacksCommonOptions & {
    /** The value of the input */
    value?: string;
    /** The title attached to the input */
    title?: string;
    /** The placeholder of the input */
    placeholder?: string;
    /** Whether the input is a search input */
    isSearch?: boolean;
};
/**
 * @see https://stackoverflow.design/product/components/inputs/
 *
 * @summary creates a Stacks input
 * @param {string} id the input id
 * @param {StacksInputOptions} inputOptions input configuration
 * @param {StacksLabelOptions} [labelOptions] label configuration
 * @returns {HTMLDivElement}
 */
export declare const makeStacksInput: (id: string, inputOptions?: StacksInputOptions, labelOptions?: Label.StacksLabelOptions) => HTMLDivElement;
export type StacksRadioCheckboxOptions = StacksCommonOptions & {
    /** The legend title */
    legendText?: string;
    /** An optional legend description */
    legendDescription?: string;
    /** Whether the align the checkboxes/radios horizontally */
    horizontal?: boolean;
    /** Whether to just return the checkboxes or wrap them in a `<fieldset>` element */
    withoutFieldset?: boolean;
};
export type StacksInputTypes = {
    /** The checkbox id */
    id: string;
    /** The attached label text */
    labelConfig: Label.StacksLabelOptions;
    /** Whether the checkbox should be selected */
    selected?: boolean;
    /** Whether the checkbox should be disabled */
    disabled?: boolean;
    /** The input's name */
    name?: string;
};
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 * @see https://stackoverflow.design/product/components/radio/
 *
 * @summary Creates a Stacks input
 * @param {StacksInputTypes[]} inputs The checkboxes to create
 * @param {StacksRadioCheckboxOptions} [options] checkbox configuration
 * @returns {HTMLElement[]} The checkboxes with or without the wrapper
 */
export declare const makeStacksRadiosOrCheckboxes: (inputs: StacksInputTypes[], type: "radio" | "checkbox", options?: StacksRadioCheckboxOptions, withoutFieldset?: boolean) => HTMLElement[];
