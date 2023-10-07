import { StacksCommonOptions, Avatar, Badges, Tag } from ".";
type AllUserCardOptions = StacksCommonOptions & {
    avatar?: Avatar.StacksAvatarOptions;
    time?: string;
    user: {
        name?: string;
        href?: string;
        reputation?: string;
        badges?: {
            gold?: number;
            silver?: number;
            bronze?: number;
        };
        labels?: Badges.StacksBadgesOptions[];
        role?: string;
        location?: string;
        tags?: Tag.StacksTagsOptions[];
    };
    highlight?: boolean;
    userType?: string;
    deleted?: boolean;
};
export type FullUserCardOptions = Omit<AllUserCardOptions, "time" | "deleted" | "highlight">;
export declare const makeFullUserCard: (options: FullUserCardOptions) => HTMLDivElement;
export type BaseUserCardOptions = Omit<AllUserCardOptions, "user"> & {
    user: Omit<AllUserCardOptions["user"], "role" | "location" | "tags">;
};
export declare const makeBaseUserCard: (options: BaseUserCardOptions) => HTMLDivElement;
export type SmallUserCardOptions = Pick<AllUserCardOptions, "avatar" | "classes"> & {
    user: Pick<AllUserCardOptions["user"], "badges" | "href" | "reputation">;
};
export declare const makeSmallUserCard: (options: SmallUserCardOptions) => HTMLDivElement;
export type MinimalUserCardOptions = Omit<AllUserCardOptions, "highlight" | "userType" | "user"> & {
    user: Pick<AllUserCardOptions["user"], "name" | "href" | "reputation">;
};
export declare const makeMinimalUserCard: (options: MinimalUserCardOptions) => HTMLDivElement;
export {};
