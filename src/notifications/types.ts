import { StacksCommonOptions } from "../types";

export type StacksToastType =
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

export type StacksToastOptions = StacksCommonOptions &
    Partial<{
        buttons: HTMLButtonElement[];
        msgClasses: string[];
        important: boolean;
        type: StacksToastType;
    }>;
