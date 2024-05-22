import { StacksCommonOptions } from "./index";
export type StacksPaginationOptions = StacksCommonOptions & {
    first: number[];
    middle?: number[];
    last: number[];
    generator: (page: number) => string;
    selectedPage?: number;
    nextButtonHref?: string;
};
export declare const makePagination: (options: StacksPaginationOptions) => HTMLDivElement;
export declare const createPage: (page: number, url: string, isSelected: boolean) => HTMLSpanElement | HTMLAnchorElement;
