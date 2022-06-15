import { StacksCommonOptions, Label } from "./index";
export declare type SelectOption = {
    /** The value of the option */
    value: string;
    /** The option visible text */
    text: string;
    /** Whether the option is selected */
    selected?: boolean;
};
export declare type StacksSelectOptions = StacksCommonOptions & {
    /** Whether the select is disabled */
    disabled?: boolean;
    /** The size of the select element */
    size?: "sm" | "md" | "lg" | "xl";
    /** The validation state */
    validation?: "success" | "warning" | "error";
};
/**
 * @see https://stackoverflow.design/product/components/select/
 *
 * @summary Creates a Stacks select element
 * @param {string} id The id of the select
 * @param {SelectOption[]} items The options to display in the select
 * @param {Label.StacksLabelOptions} [labelOptions] label configuration
 * @param {StacksSelectOptions} [options] configuration
 * @returns {HTMLDivElement}
 */
export declare const makeStacksSelect: (id: string, items: SelectOption[], labelOptions?: Label.StacksLabelOptions, options?: StacksSelectOptions) => HTMLDivElement;
/**
 * @see https://stackoverflow.design/product/components/select/#validation-states
 *
 * @summary Toggles validation styling to a select
 * @param {HTMLDivElement} container the select's container
 * @param {StacksSelectOptions["validation"]} [state] configuration
 * @returns {void}
 */
export declare const toggleValidation: (container: HTMLDivElement, state?: StacksSelectOptions["validation"]) => void;
