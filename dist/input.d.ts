import { StacksCommonOptions, Label } from "./index";
export declare type StacksInputOptions = StacksCommonOptions & {
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
