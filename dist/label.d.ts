import { StacksCommonOptions } from "./index";
export type StacksLabelOptions = StacksCommonOptions & {
    text: string;
    description?: string;
    parentClasses?: string[];
    statusText?: string;
    statusType?: "optional" | "required" | "new" | "beta";
};
export declare const makeStacksLabel: (forId: string, labelOptions: StacksLabelOptions) => HTMLDivElement | HTMLLabelElement;
