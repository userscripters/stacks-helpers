import { StacksCommonOptions } from "../index";
export declare type StacksModalOptions = StacksCommonOptions & {
    /** Whether to style the modal as dangerous */
    danger?: boolean;
    /** Whether to increase the modal's width */
    fullscreen?: boolean;
    /** Celebratory modal styling */
    celebratory?: boolean;
    /** Title configuration */
    title: {
        /** Title text (HTML allowed) */
        text: string | HTMLElement;
        /** Title id */
        id?: string;
        /** Classes applied to the title h1 element */
        classes?: string[];
    };
    /** Body configuration */
    body: {
        /** Body HTML */
        bodyHtml: string | HTMLElement;
        /** Body id */
        id?: string;
        /** Classes applied to the body element */
        classes?: string[];
    };
    /** Footer configuration */
    footer: {
        /** Buttons appended to the modal's footer */
        buttons: {
            /** The button element */
            element: HTMLButtonElement;
            /** Whether to hide modal when that button is clicked */
            hideOnClick?: boolean;
        }[];
        /** Classes applied to the footer element */
        classes?: string[];
    };
};
/**
 * @see https://stackoverflow.design/product/components/modals/
 *
 * @summary creates a Stacks modal
 * @param {string} id the id of the modal
 * @param {StacksModalOptions} options configuration
 * @returns {HTMLElement}
 */
export declare const makeStacksModal: (id: string, options: StacksModalOptions) => HTMLElement;
