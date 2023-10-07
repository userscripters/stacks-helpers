import { StacksCommonOptions } from "./index";
export type GroupButton = {
    text: string | HTMLElement;
    selected?: boolean;
    count?: number;
    form?: boolean;
};
export type StacksButtonGroupOptions = StacksCommonOptions;
export declare const makeStacksButtonGroup: (buttons: GroupButton[], options?: StacksButtonGroupOptions) => HTMLDivElement;
