import { StacksCommonOptions } from "../types";
export declare type StacksToastType = "info" | "success" | "warning" | "danger" | "none";
export declare type StacksToastOptions = StacksCommonOptions & Partial<{
    buttons: HTMLButtonElement[];
    msgClasses: string[];
    important: boolean;
    type: StacksToastType;
}>;
