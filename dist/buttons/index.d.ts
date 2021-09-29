import { StacksCommonOptions } from "../index.js";
export declare type StacksIconButtonOptions = StacksCommonOptions & {
    title?: string;
    muted?: boolean;
    type?: "outlined" | "filled";
    primary?: boolean;
    danger?: boolean;
    loading?: boolean;
};
/**
 * @see https://stackoverflow.design/product/components/buttons/
 *
 * @summary creates a stacks button
 * @param {string} id id of the button
 * @param {string} text text of the button
 * @param {StacksIconButtonOptions} [options] configuration
 * @returns {HTMLButtonElement}
 */
export declare const makeStacksButton: (id: string, text: string, { classes, title, danger, loading, muted, primary, type, }?: StacksIconButtonOptions) => HTMLButtonElement;
