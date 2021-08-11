import { StacksCommonOptions } from "../index";

export type StacksIconOptions = StacksCommonOptions & {};
/**
 * @see https://stackoverflow.design/product/resources/icons/
 * @summary makes Stacks 18 x 18 icon
 */
export const makeStacksIcon = (
    name: string,
    pathConfig: string,
    { classes = [] }: StacksIconOptions = {}
) => {
    const ns = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(ns, "svg");
    svg.classList.add("svg-icon", name, ...classes);
    svg.setAttribute("width", "18");
    svg.setAttribute("height", "18");
    svg.setAttribute("viewBox", "0 0 18 18");
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", pathConfig);

    svg.append(path);
    return [svg, path];
};
