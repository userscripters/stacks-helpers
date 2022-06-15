import { StacksCommonOptions } from "./index";
export declare type StacksTagsOptions = StacksCommonOptions & {
    /** The name of the tag */
    name: string;
    /** The URL the tag should link to */
    href?: string;
    /** Whether the tag is a moderator-only tag */
    moderator?: boolean;
    /** Whether the tag should be selected */
    selected?: boolean;
    /** The size of the tag */
    size?: "xs" | "sm" | "md" | "lg";
    /** Whether to apply a muted style to the tag */
    muted?: boolean;
    /** Whether the tag is a required tag */
    required?: boolean;
    /** Whether to add an eye SVG next to the tag name */
    watched?: boolean;
    /** Sponsor information */
    sponsor?: {
        /** The image URL */
        imgUrl: string;
        /** The image width */
        width?: number;
        /** The image height */
        height?: number;
        /** The image alt text */
        alt?: string;
    };
    /** Whether the tag can be dismissed */
    dismissable?: boolean;
    /**
     * Handler called when the dismiss button is clicked
     * @param {HTMLDivElement} tag the tag element
     * @param {MouseEvent} event the click event
     */
    onDismiss?: (tag: HTMLDivElement, event: MouseEvent) => void;
};
/**
 * @see https://stackoverflow.design/product/components/tags/
 *
 * @summary Creates a Stacks tag
 * @param {StacksTagsOptions} options - configuration
 * @returns {AnchorElement}
 */
export declare const makeStacksTag: (options: StacksTagsOptions) => HTMLAnchorElement;
