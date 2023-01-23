import { StacksCommonOptions } from "./index";
export type BreadcrumbItem = {
    /** The text of the breadcrumb (HTML elements allowed) */
    label: string | HTMLElement;
    /** The link the item should point to */
    href?: string;
};
/**
 * @see https://stackoverflow.design/product/components/breadcrumbs/
 *
 * @summary Creates a Stacks breadcrumb
 * @param {BreadcrumbItem[]} items An array of items to display in the breadcrumb
 * @param {StacksCommonOptions} options configuration
 * @returns {HTMLElement}
 */
export declare const makeStacksBreadcrumb: (items: BreadcrumbItem[], options: StacksCommonOptions) => HTMLElement;
