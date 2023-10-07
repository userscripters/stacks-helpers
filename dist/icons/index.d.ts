import { StacksCommonOptions } from "../index";
export declare const validationIcons: {
    warning: string[];
    error: string[];
    success: string[];
};
export type StacksIconOptions = StacksCommonOptions & {
    width?: number;
    height?: number;
};
export declare const makeStacksIcon: (name: string, pathConfig: string, { classes, width, height }?: StacksIconOptions) => [SVGSVGElement, SVGPathElement];
