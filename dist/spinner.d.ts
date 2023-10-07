import { StacksCommonOptions } from "./index";
export type StacksSpinnerOptions = StacksCommonOptions & {
    size?: "xs" | "sm" | "md" | "lg";
    hiddenText?: string;
};
export declare const makeSpinner: (options?: StacksSpinnerOptions) => HTMLDivElement;
