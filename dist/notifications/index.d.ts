import { StacksCommonOptions } from "../index";
export declare type StacksToastType = "info" | "success" | "warning" | "danger" | "none";
export declare type StacksToastOptions = StacksCommonOptions & Partial<{
    buttons: HTMLButtonElement[];
    msgClasses: string[];
    important: boolean;
    type: StacksToastType;
}>;
/**
 * @see https://stackoverflow.design/product/components/notices/
 * @summary builder for Stacks notifications
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
