import { StacksCommonOptions } from "./index";
export type StacksIndicatorOptions = StacksCommonOptions & {
    type?: "success" | "warning" | "danger";
    text?: string;
    hiddenText?: string;
    iconConfig?: {
        name: string;
        path: string;
        width?: number;
        height?: number;
    };
};
export declare const makeIndicator: (options?: StacksIndicatorOptions) => HTMLDivElement;
