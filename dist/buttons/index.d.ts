import { StacksCommonOptions } from "../index";
export declare type ButtonType = "outlined" | "link" | "filled" | "muted" | "danger" | "dropdown" | "unset" | "link" | "facebook" | "google" | "github";
export declare type StacksIconButtonOptions = StacksCommonOptions & {
    /** The title attached to the button */
    title?: string;
    /** The style(s) of the button */
    type?: ButtonType[];
    /** Whether the button is primary or secondary */
    primary?: boolean;
    /** Whether to attach a loading icon to the button */
    loading?: boolean;
    /** Whether to visually activate the selected state of the button */
    selected?: boolean;
    /** Whether to style the button as disabled */
    disabled?: boolean;
    /** The number of an optionally appended appropriately-styled badge */
    badge?: number;
    /** The size of the button */
    size?: "xs" | "sm" | "md";
    /** Configuration of an optionally prepended SVG icon */
    iconConfig?: {
        /** The name of the SVG */
        name: string;
        /** The path of the SVG */
        path: string;
        /** The width of the SVG */
        width?: number;
        /** The height of the SVG */
        height?: number;
    };
    /** `click` listener configuration */
    click?: {
        /** Handler called when the button is clicked */
        handler: (this: HTMLButtonElement, ev: MouseEvent) => void;
        /** The third argument to `.addEventListener()` */
        options?: boolean | AddEventListenerOptions;
    };
};
/**
 * @see https://stackoverflow.design/product/components/buttons/
 *
 * @summary creates a stacks button
 * @param {string} id id of the button
 * @param {string} text text of the button
 * @param {StacksIconButtonOptions} [options] configuration
 * @returns {HTMLButtonElement}
 */
export declare const makeStacksButton: (id: string, text: string, options?: StacksIconButtonOptions) => HTMLButtonElement;
