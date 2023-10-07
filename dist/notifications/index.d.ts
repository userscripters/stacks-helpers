import { StacksCommonOptions } from "../index";
export type StacksToastType = "info" | "success" | "warning" | "danger" | "none";
export type StacksToastOptions = StacksCommonOptions & Partial<{
    buttons: HTMLButtonElement[];
    msgClasses: string[];
    important: boolean;
    type: StacksToastType;
}>;
export declare const makeStacksToast: (id: string, text: string, { buttons, classes, msgClasses, type, important, }?: StacksToastOptions) => HTMLDivElement;
export declare const toggleToast: (target: string | Element, show?: boolean) => Element;
export declare const hideToast: (target: string | Element, hideFor?: number) => void;
export declare const showToast: (target: string | Element, showFor?: number) => void;
