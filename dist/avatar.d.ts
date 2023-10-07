import { StacksCommonOptions } from "./index";
export type StacksAvatarOptions = StacksCommonOptions & {
    size?: 24 | 32 | 48 | 64 | 96 | 128;
    href?: string;
    src: string;
};
export declare const makeAvatar: (options?: StacksAvatarOptions, elementType?: keyof HTMLElementTagNameMap) => HTMLElement;
