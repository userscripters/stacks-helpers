import { StacksCommonOptions, Label } from "./index";
export type StacksTextareaOptions = StacksCommonOptions & {
    value?: string;
    title?: string;
    placeholder?: string;
    size?: "sm" | "md" | "lg" | "xl";
    validation?: {
        state: "success" | "warning" | "error";
        description?: string;
    };
};
export declare const makeStacksTextarea: (id: string, textareaOptions?: StacksTextareaOptions, labelOptions?: Label.StacksLabelOptions) => HTMLDivElement;
export declare const toggleValidation: (textareaParent: HTMLDivElement, validation: StacksTextareaOptions["validation"]) => void;
