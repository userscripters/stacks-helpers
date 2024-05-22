import { StacksCommonOptions } from "./index";
import { Buttons } from "./index";
export type GroupButton = {
    text: string | HTMLElement;
    selected?: boolean;
    count?: number;
    form?: boolean;
    types?: Omit<Buttons.ButtonType, "outlined" | "muted">[];
};
export type StacksButtonGroupOptions = StacksCommonOptions;
export declare const makeStacksButtonGroup: (buttons: GroupButton[], options?: StacksButtonGroupOptions) => HTMLDivElement;
