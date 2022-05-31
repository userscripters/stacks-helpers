import { StacksCommonOptions } from "./index";
export declare type StacksAvatarOptions = StacksCommonOptions & {
    size?: 24 | 32 | 48 | 64 | 96 | 128;
    href?: string;
    src: string;
};
/**
 * @see https://stackoverflow.com/product/components/avatar/
 *
 * @summary creates a Stacks avatar
 * @param {StacksAvatarOptions} options configuration
 * @returns {HTMLAnchorElement}
 */
export declare const makeAvatar: (options?: StacksAvatarOptions) => HTMLAnchorElement;
