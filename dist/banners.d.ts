import { StacksCommonOptions } from "./index";
export type StacksBannerOptions = StacksCommonOptions & {
    style?: "info" | "success" | "warning" | "danger";
    important?: boolean;
    pinned?: boolean;
    text: string | HTMLElement;
    icon?: string[];
};
export declare const makeStacksBanner: (options: StacksBannerOptions) => HTMLElement;
