/**
 * @see https://stackoverflow.design/product/resources/icons/
 *
 * @summary makes Stacks 18 x 18 icon
 * @param {string} name the name of the icon
 * @param {string} pathConfig the SVG's `path` attribute
 */
export const makeStacksIcon = (name, pathConfig, { classes = [], width = 14, height = width } = {}) => {
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
