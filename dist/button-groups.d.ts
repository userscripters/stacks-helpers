import { StacksCommonOptions } from "./index";
export type GroupButton = {
    /** Button text (HTML allowed) */
    text: string | HTMLElement;
    /** Whether to select the button */
    selected?: boolean;
    /** Numerical count displayed in a button group */
    count?: number;
    /** Whether to wrap the button in a `<form>` element */
    form?: boolean;
};
export type StacksButtonGroupOptions = StacksCommonOptions;
/**
 * @see https://stackoverflow.design/product/components/button-groups/
 *
 * @summary Creates a Stacks button group
 * @param {GroupButton[]} buttons the buttons to display in the group
 * @param {StacksButtonGroupOptions} [options] configuration
 * @returns {HTMLDivElement}
 */
export declare const makeStacksButtonGroup: (buttons: GroupButton[], options?: StacksButtonGroupOptions) => HTMLDivElement;
