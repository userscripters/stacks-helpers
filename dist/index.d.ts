import { StacksToastOptions } from "./types";
/**
 * @see https://stackoverflow.design/product/components/notices/
 * @summary builder for Stacks notifications
 */
export declare const makeStacksToast: (id: string, text: string, { buttons, classes, msgClasses }?: StacksToastOptions) => HTMLDivElement;
