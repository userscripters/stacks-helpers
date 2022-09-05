import { Input } from "./index";
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks checkbox
 * @param {Input.StacksInputTypes[]} checkboxes The checkboxes to create
 * @param {Input.StacksRadioCheckboxOptions} [options] checkbox configuration
 * @returns {HTMLElement[]}
 */
export const makeStacksCheckboxes = (checkboxes, options) => {
    return Input.makeStacksRadiosOrCheckboxes(checkboxes, "checkbox", options);
};
