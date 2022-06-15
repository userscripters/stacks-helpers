import { StacksCommonOptions } from "./index";
export declare type StacksBaseBarOptions = StacksCommonOptions & {
    /** The width to colour */
    width: number;
    /** Optional colour variation */
    coloring?: "brand" | "info";
};
/**
 * @see https://stackoverflow.design/product/components/progress-bars/#base-style
 *
 * @summary Create a Stacks base progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksBaseBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
export declare const makeBaseBar: (id: string, options: StacksBaseBarOptions) => HTMLDivElement;
export declare type StacksCircularBarOptions = StacksCommonOptions & Omit<StacksBaseBarOptions, "coloring"> & {
    /** The size of the bar */
    size?: "sm" | "md" | "lg";
};
/**
 * @see https://stackoverflow.design/product/components/progress-bars/#circular
 *
 * @summary Create a Stacks circular progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksCircularBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
export declare const makeCircularBar: (id: string, options: StacksCircularBarOptions) => HTMLDivElement;
export declare type StacksSegmentedBarOptions = StacksBaseBarOptions & {
    /** The total number of segments to include */
    segments: number;
};
/**
 * @see https://stackoverflow.design/product/components/progress-bars/#segmented
 *
 * @summary Create a Stacks segmented progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksSegmentedBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
export declare const makeSegmentedBar: (id: string, options: StacksSegmentedBarOptions) => HTMLDivElement;
export declare type SteppedBarItem = {
    /** Whether the current stage has been completed or is active */
    status?: "complete" | "active";
    /** A short description of the stage */
    label: string;
    /** Classes applied to the item */
    classes: string[];
    /** The link the stage should point to */
    href?: string;
};
/**
 * @see https://stackoverflow.design/product/components/progress-bars/#stepped
 *
 * @summary Create a Stacks stepped progress bar
 * @param {string} id - the id of the progress bar
 * @param {SteppedBarItem[]} items - the items to display
 * @param {StacksCommonOptions} options - configuration
 * @returns {HTMLDivElement}
 */
export declare const makeSteppedBar: (id: string, items: SteppedBarItem[], options?: StacksCommonOptions) => HTMLDivElement;
