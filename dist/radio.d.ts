import { Input } from "./index";
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks radio
 * @param {Input.StacksInputTypes[]} radios The radios to create
 * @param {Input.StacksRadioCheckboxOptions} [options] radio configuration
 * @returns {HTMLFieldSetElement}
 */
export declare const makeStacksRadios: (radios: Input.StacksInputTypes[], groupName: string, options?: Input.StacksRadioCheckboxOptions) => HTMLFieldSetElement;
