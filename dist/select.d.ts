import { StacksCommonOptions, Label } from "./index";
export type SelectOption = {
    value: string;
    text: string;
    selected?: boolean;
};
export type StacksSelectOptions = StacksCommonOptions & {
    disabled?: boolean;
    size?: "sm" | "md" | "lg" | "xl";
    validation?: "success" | "warning" | "error";
};
export declare const makeStacksSelect: (id: string, items: SelectOption[], options?: StacksSelectOptions, labelOptions?: Label.StacksLabelOptions) => HTMLDivElement;
export declare const toggleValidation: (container: HTMLDivElement, state?: StacksSelectOptions["validation"]) => void;
