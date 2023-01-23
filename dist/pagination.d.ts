import { StacksCommonOptions } from "./index";
export type StacksPaginationOptions = StacksCommonOptions & {
    /** The first batch */
    first: number[];
    /** The middle batch (optional) */
    middle?: number[];
    /** The last batch */
    last: number[];
    /** Called to determine the URL of a page button given the page number */
    generator: (page: number) => string;
    /** The selected page number */
    selectedPage?: number;
    /** The link the Next button should point to */
    nextButtonHref?: string;
};
/**
 * @see https://stackoverflow.design/product/components/pagination/
 *
 * @summary Creates a Stacks pagination component
 * @param {StacksPaginationOptions} options
 * @returns {HTMLDivElement}
 */
export declare const makePagination: (options: StacksPaginationOptions) => HTMLDivElement;
