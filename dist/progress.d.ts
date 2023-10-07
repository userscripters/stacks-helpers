import { StacksCommonOptions } from "./index";
export type StacksBaseBarOptions = StacksCommonOptions & {
    width: number;
    coloring?: "brand" | "info";
};
export declare const makeBaseBar: (id: string, options: StacksBaseBarOptions) => HTMLDivElement;
export type StacksCircularBarOptions = StacksCommonOptions & Omit<StacksBaseBarOptions, "coloring"> & {
    size?: "sm" | "md" | "lg";
};
export declare const makeCircularBar: (id: string, options: StacksCircularBarOptions) => HTMLDivElement;
export type StacksSegmentedBarOptions = StacksBaseBarOptions & {
    segments: number;
};
export declare const makeSegmentedBar: (id: string, options: StacksSegmentedBarOptions) => HTMLDivElement;
export type SteppedBarItem = {
    status?: "complete" | "active";
    label: string;
    classes: string[];
    href?: string;
};
export declare const makeSteppedBar: (id: string, items: SteppedBarItem[], options?: StacksCommonOptions) => HTMLDivElement;
