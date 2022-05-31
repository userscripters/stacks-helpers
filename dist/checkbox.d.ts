export declare type StacksCheckboxOption = {
    legendText?: string;
    legendDescription?: string;
};
export declare type StacksCheckboxes = {
    id: string;
    label: string;
    state: boolean;
    disabled: boolean;
};
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary creates a Stacks checkbox
 * @param {StacksCheckboxes[]} checkboxes the checkboxes to create
 * @param {StacksCheckboxOption} checkboxOptions checkbox configuration
 * @returns {HTMLFieldSetElement}
 */
export declare const makeStacksCheckboxes: (checkboxes: StacksCheckboxes[], options?: StacksCheckboxOption) => HTMLFieldSetElement;
