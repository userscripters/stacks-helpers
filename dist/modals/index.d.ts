import { StacksCommonOptions } from "../index";
export declare type StacksModalOptions = StacksCommonOptions & {
    /** Whether to style the modal as dangerous */
    danger?: boolean;
    /** Whether to increase the modal's width */
    fullscreen?: boolean;
};
/**
 * @see https://stackoverflow.design/product/components/modals/
 *
 * @summary creates a Stacks modal
 * @param {string} id id of the modal
 * @param {string} title modal title
 * @param {StacksModalOptions} options modal configuration
 * @returns {HTMLElement}
 */
export declare const makeConfigView: (id: string, title: string, { classes, danger, fullscreen, }?: StacksModalOptions) => HTMLElement;
