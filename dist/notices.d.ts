import { StacksCommonOptions } from "./index";
export type StacksNoticesOptions = StacksCommonOptions & {
    type?: "info" | "success" | "warning" | "danger";
    important?: boolean;
    icon?: string[];
    text: string | HTMLElement;
};
export declare const makeStacksNotice: (options: StacksNoticesOptions) => HTMLElement;
