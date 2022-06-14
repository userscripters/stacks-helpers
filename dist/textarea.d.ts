import { StacksCommonOptions, Label } from "./index";
export declare type StacksTextareaOptions = StacksCommonOptions & {
    /** The value of the textarea */
    value?: string;
    /** The title attached to the textarea */
    title?: string;
    /** The placeholder of the textarea */
    placeholder?: string;
    /** The textarea's size */
    size?: "sm" | "md" | "lg" | "xl";
    /** Optional validation configuration */
    validation?: {
        /** Validation state */
        state: "success" | "warning" | "error";
        /** Optional validation description (HTML allowed) */
        description?: string;
    };
};
/**
 * @see https://stackoverflow.design/product/components/textarea/
 *
 * @summary creates a Stacks textarea
 * @param {string} id the textarea id
 * @param {StacksTextareaOptions} textareaOptions textarea configuration
 * @param {Label.StacksLabelOptions} [labelOptions] label configuration
 * @returns {HTMLDivElement}
 */
export declare const makeStacksTextarea: (id: string, textareaOptions?: StacksTextareaOptions, labelOptions?: Label.StacksLabelOptions) => HTMLDivElement;
/**
 * @see https://stackoverflow.design/product/components/textarea/#validation-states
 *
 * @summary Toggles validation styling to a textarea
 * @param {HTMLDivElement} textareaParent the textarea's container
 * @param {StacksTextareaOptions["validation"]} validation configuration
 * @returns {void}
 */
export declare const toggleValidation: (textareaParent: HTMLDivElement, validation: StacksTextareaOptions["validation"]) => void;
