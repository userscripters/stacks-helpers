import { StacksCommonOptions } from "./index";
export type StacksIndicatorOptions = StacksCommonOptions & {
    type?: "success" | "warning" | "danger";
    text?: string;
    hiddenText?: string;
};
export declare const makeIndicator: (options?: StacksIndicatorOptions) => HTMLDivElement;
