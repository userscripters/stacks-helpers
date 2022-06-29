import { StacksCommonOptions, Label } from "./index";
export declare type StacksCheckboxOption = StacksCommonOptions & {
    /** The checkboxes legend title */
    legendText?: string;
    /** A legend optional description */
    legendDescription?: string;
    /** Whether the checkboxes should be aligned vertically or horizontally (default vertical) */
    group: "horizontal" | "vertical";
};
export declare type StacksCheckboxes = {
    /** The checkbox id */
    id: string;
    /** The attached label text */
    labelConfig: Label.StacksLabelOptions;
    /** Whether the checkbox should be selected */
    selected?: boolean;
    /** Whether the checkbox should be disabled */
    disabled?: boolean;
};
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks checkbox
 * @param {StacksCheckboxes[]} checkboxes The checkboxes to create
 * @param {StacksCheckboxOption} [options] checkbox configuration
 * @returns {HTMLFieldSetElement}
 */
export declare const makeStacksCheckboxes: (checkboxes: StacksCheckboxes[], options?: StacksCheckboxOption) => HTMLFieldSetElement;
