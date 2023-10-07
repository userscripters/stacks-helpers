import { StacksCommonOptions } from "./index";
export type BreadcrumbItem = {
    label: string | HTMLElement;
    href?: string;
};
export declare const makeStacksBreadcrumb: (items: BreadcrumbItem[], options: StacksCommonOptions) => HTMLElement;
