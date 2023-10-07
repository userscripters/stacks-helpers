import { Label } from "./index";
export type StacksToggleOptions = Pick<Label.StacksLabelOptions, "text">;
export declare const makeStacksToggle: (id: string, labelOptions: StacksToggleOptions, on?: boolean, ...classes: string[]) => HTMLDivElement;
