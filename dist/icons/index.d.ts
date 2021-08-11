import { StacksCommonOptions } from "../index";
export declare type StacksIconOptions = StacksCommonOptions & {};
/**
 * @see https://stackoverflow.design/product/resources/icons/
 * @summary makes Stacks 18 x 18 icon
 */
export declare const makeStacksIcon: (name: string, pathConfig: string, { classes }?: StacksIconOptions) => (SVGSVGElement | SVGPathElement)[];
