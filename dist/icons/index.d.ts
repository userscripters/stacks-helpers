import { StacksCommonOptions } from "../index";
export declare type StacksIconOptions = StacksCommonOptions & {
    /** The width of the icon */
    width?: number;
    /** The height of the icon */
    height?: number;
};
/**
 * @see https://stackoverflow.design/product/resources/icons/
 *
 * @summary makes Stacks 18 x 18 icon
 * @param {string} name the name of the icon
 * @param {string} pathConfig the SVG's `path` attribute
 */
export declare const makeStacksIcon: (name: string, pathConfig: string, { classes, width, height }?: StacksIconOptions) => [SVGSVGElement, SVGPathElement];
