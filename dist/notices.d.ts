import { StacksCommonOptions } from "./index";
export declare type StacksNoticesOptions = StacksCommonOptions & {
    /** The type of visual styles to be applied to the notice */
    type?: "info" | "success" | "warning" | "danger";
    /** Whether to apply important styles to the notice */
    important?: boolean;
    /** The name and path of an optional prepended SVG icon */
    icon?: string[];
    /** The text appearing on the notice (HTML allowed) */
    text: string | HTMLElement;
};
/**
 * @see https://stackoverflow.design/product/components/notices/
 *
 * @summary Creates a Stacks notice
 * @param {StacksNoticesOptions} options configuration
 * @returns {HTMLElement}
 */
export declare const makeStacksNotice: (options: StacksNoticesOptions) => HTMLElement;
