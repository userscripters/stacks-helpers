import { StacksCommonOptions } from "../index.js";
export declare type ButtonType = "outlined" | "link" | "filled";
export declare type StacksIconButtonOptions = StacksCommonOptions & {
    /** The title attached to the button */
    title?: string;
    /** Whether the button should be muted */
    muted?: boolean;
    /** The style of the button */
    type?: ButtonType;
    /** Whether the button is primary or secondary */
    primary?: boolean;
    /** Whether to style the button as dangerous */
    danger?: boolean;
    /** Whether to attach a loading icon to the button */
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
