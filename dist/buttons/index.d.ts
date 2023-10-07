import { StacksCommonOptions } from "../index";
export type ButtonType = "outlined" | "link" | "filled" | "muted" | "danger" | "dropdown" | "unset" | "link" | "facebook" | "google" | "github";
export type StacksIconButtonOptions = StacksCommonOptions & {
    title?: string;
    type?: ButtonType[];
    primary?: boolean;
    loading?: boolean;
    selected?: boolean;
    disabled?: boolean;
    badge?: number;
    size?: "xs" | "sm" | "md";
    iconConfig?: {
        name: string;
        path: string;
        width?: number;
        height?: number;
    };
    click?: {
        handler: (this: HTMLButtonElement, ev: MouseEvent) => void;
        options?: boolean | AddEventListenerOptions;
    };
};
export declare const makeStacksButton: (id: string, text: string, options?: StacksIconButtonOptions) => HTMLButtonElement;
