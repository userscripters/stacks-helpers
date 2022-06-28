import { StacksCommonOptions } from "./index";
export declare type StacksBannerOptions = StacksCommonOptions & {
    /** The type of visual styles to be applied to the banner */
    style: "info" | "success" | "warning" | "danger";
    /** Whether to apply important styles to the banner */
    important?: boolean;
    /** Whether the banner should be pinned */
    pinned?: boolean;
    /** The text appearing on the banner (HTML allowed) */
    text: string | HTMLElement;
    /** The name and path of an optional prepended SVG icon */
    icon?: string[];
};
/**
 * @see https://stackoverflow.design/product/components/banners/
 *
 * @summary Creates a Stacks banner
 * @param {StacksBannerOptions} options configuration
 * @returns {HTMLElement}
 */
export declare const makeStacksBanner: (options: StacksBannerOptions) => HTMLElement;
