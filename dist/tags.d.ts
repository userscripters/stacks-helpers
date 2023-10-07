import { StacksCommonOptions } from "./index";
export type StacksTagsOptions = StacksCommonOptions & {
    name: string;
    href?: string;
    moderator?: boolean;
    selected?: boolean;
    size?: "xs" | "sm" | "md" | "lg";
    muted?: boolean;
    required?: boolean;
    watched?: boolean;
    ignored?: boolean;
    sponsor?: {
        imgUrl: string;
        width?: number;
        height?: number;
        alt?: string;
    };
    dismissable?: boolean;
    onDismiss?: (tag: HTMLDivElement, event: MouseEvent) => void;
};
export declare const makeStacksTag: (options: StacksTagsOptions) => HTMLAnchorElement;
