export declare type StacksCheckboxOption = {
    /** The checkboxes legend title */
    legendText?: string;
    /** A legend optional description */
    legendDescription?: string;
};
export declare type StacksCheckboxes = {
    /** The checkbox id */
    id: string;
    /** The attached label text */
    label: string;
    /** Whether the checkbox should be selected */
    state?: boolean;
    /** Whether the checkbox should be disabled */
    disabled?: boolean;
};
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary creates a Stacks checkbox
 * @param {StacksCheckboxes[]} checkboxes the checkboxes to create
 * @param {StacksCheckboxOption} options checkbox configuration
 * @returns {HTMLFieldSetElement}
 */
export declare const makeStacksCheckboxes: (checkboxes: StacksCheckboxes[], options?: StacksCheckboxOption) => HTMLFieldSetElement;
