import { StacksCommonOptions, Avatar, Badges, Tag } from ".";
type AllUserCardOptions = StacksCommonOptions & {
    /** Avatar configuration */
    avatar?: Avatar.StacksAvatarOptions;
    /** The time since the user made an action (e.g. 3 hours ago, yesterday) */
    time?: string;
    /** User information */
    user: {
        /** The username */
        name?: string;
        /** The link to the user's profile */
        href?: string;
        /** The user's reputation */
        reputation?: string;
        /** The badges the user holds */
        badges?: {
            /** The number of gold badges */
            gold?: number;
            /** The number of silver badges */
            silver?: number;
            /** The number of bronze badges */
            bronze?: number;
        };
        /** Staff, Mod, Admin, etc. badges configuration */
        labels?: Badges.StacksBadgesOptions[];
        /** The user's role */
        role?: string;
        /** The user's location */
        location?: string;
        /** The user's (top) tags */
        tags?: Tag.StacksTagsOptions[];
    };
    /** Whether to highlight the entire user card (that is, whether the user is a post owner) */
    highlight?: boolean;
    /** Container for achievemnts (e.g. Recognised by X) */
    userType?: string;
    /** Whether the user has been deleted */
    deleted?: boolean;
};
export type FullUserCardOptions = Omit<AllUserCardOptions, "time" | "deleted" | "highlight">;
/**
 * @see https://stackoverflow.design/product/components/user-cards/#full
 *
 * @summary Creates a Stacks full user card
 * @param {FullUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
export declare const makeFullUserCard: (options: FullUserCardOptions) => HTMLDivElement;
export type BaseUserCardOptions = Omit<AllUserCardOptions, "user"> & {
    user: Omit<AllUserCardOptions["user"], "role" | "location" | "tags">;
};
/**
 * @see https://stackoverflow.design/product/components/user-cards/#base
 *
 * @summary Creates a Stacks base user card
 * @param {BaseUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
export declare const makeBaseUserCard: (options: BaseUserCardOptions) => HTMLDivElement;
export type SmallUserCardOptions = Pick<AllUserCardOptions, "avatar" | "classes"> & {
    user: Pick<AllUserCardOptions["user"], "badges" | "href" | "reputation">;
};
/**
 * @see https://stackoverflow.design/product/components/user-cards/#small
 *
 * @summary Creates a Stacks small user card
 * @param {SmallUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
export declare const makeSmallUserCard: (options: SmallUserCardOptions) => HTMLDivElement;
export type MinimalUserCardOptions = Omit<AllUserCardOptions, "highlight" | "userType" | "user"> & {
    user: Pick<AllUserCardOptions["user"], "name" | "href" | "reputation">;
};
/**
 * @see https://stackoverflow.design/product/components/user-cards/#minimal
 *
 * @summary Creates a Stacks minimal user card
 * @param {MinimalUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
export declare const makeMinimalUserCard: (options: MinimalUserCardOptions) => HTMLDivElement;
export {};
