import { StacksCommonOptions, Label } from "./index";
export type StacksInputOptions = StacksCommonOptions & {
    value?: string;
    title?: string;
    placeholder?: string;
    isSearch?: boolean;
};
export declare const makeStacksInput: (id: string, inputOptions?: StacksInputOptions, labelOptions?: Label.StacksLabelOptions) => HTMLDivElement;
export type StacksRadioCheckboxOptions = StacksCommonOptions & {
    legendText?: string;
    legendDescription?: string;
    horizontal?: boolean;
    withoutFieldset?: boolean;
};
export type StacksInputTypes = {
    id: string;
    labelConfig: Label.StacksLabelOptions;
    selected?: boolean;
    disabled?: boolean;
    name?: string;
};
export declare const makeStacksRadiosOrCheckboxes: (inputs: StacksInputTypes[], type: "radio" | "checkbox", options?: StacksRadioCheckboxOptions, withoutFieldset?: boolean) => HTMLElement[];
