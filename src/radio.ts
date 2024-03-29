import { Input } from "./index";

/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks radio
 * @param {Input.StacksInputTypes[]} radios The radios to create
 * @param {Input.StacksRadioCheckboxOptions} [options] radio configuration
 * @returns {HTMLElement[]}
 */
export const makeStacksRadios = (
    radios: Input.StacksInputTypes[],
    groupName: string,
    options?: Input.StacksRadioCheckboxOptions,
): HTMLElement[] => {
    radios.forEach((radio) => {
        radio.name = groupName;
    });

    return Input.makeStacksRadiosOrCheckboxes(radios, "radio", options);
};
