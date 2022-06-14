import { StacksCommonOptions } from "../index";

export type StacksIconOptions = StacksCommonOptions & {
    /** The width of the icon */
    width?: number;
    /** The height of the icon */
    height?: number;
};
/**
 * @see https://stackoverflow.design/product/resources/icons/
 *
 * @summary makes Stacks icon
 * @param {string} name the name of the icon
 * @param {string} pathConfig the SVG's `path` attribute
 */
export const makeStacksIcon = (
    name: string,
    pathConfig: string,
    { classes = [], width = 14, height = width }: StacksIconOptions = {}
): [SVGSVGElement, SVGPathElement] => {
    const ns = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(ns, "svg");
    svg.classList.add("svg-icon", name, ...classes);
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", pathConfig);

    svg.append(path);
    return [svg, path];
};
