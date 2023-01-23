import { StacksCommonOptions } from "./index";
export type StacksAvatarOptions = StacksCommonOptions & {
    /** The size of the avatar */
    size?: 24 | 32 | 48 | 64 | 96 | 128;
    /** The link that the avatar should redirect when clicked */
    href?: string;
    /** The source of the image */
    src: string;
};
/**
 * @see https://stackoverflow.design/product/components/avatar/
 *
 * @summary creates a Stacks avatar
 * @param {StacksAvatarOptions} options configuration
 * @returns {HTMLAnchorElement}
 */
export declare const makeAvatar: (options?: StacksAvatarOptions, elementType?: keyof HTMLElementTagNameMap) => HTMLElement;
