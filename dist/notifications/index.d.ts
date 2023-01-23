import { StacksCommonOptions } from "../index";
export type StacksToastType = "info" | "success" | "warning" | "danger" | "none";
export type StacksToastOptions = StacksCommonOptions & Partial<{
    /** Action buttons on the toast */
    buttons: HTMLButtonElement[];
    /** Classes applied to the message element */
    msgClasses: string[];
    /** Whether the toast should be styled as important */
    important: boolean;
    /** The type of the toast */
    type: StacksToastType;
}>;
/**
 * @see https://stackoverflow.design/product/components/notices/
 *
 * @summary builder for Stacks notifications
 * @param {string} id the toast id
 * @param {string} text the message text
 */
export declare const makeStacksToast: (id: string, text: string, { buttons, classes, msgClasses, type, important, }?: StacksToastOptions) => HTMLDivElement;
/**
 * @summary toggles the Stacks toast visibility
 */
export declare const toggleToast: (target: string | Element, show?: boolean) => Element;
/**
 * @summary hides the Stacks toast
 */
export declare const hideToast: (target: string | Element, hideFor?: number) => void;
/**
 * @summary shows the Stacks toast
 */
export declare const showToast: (target: string | Element, showFor?: number) => void;
