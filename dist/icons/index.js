export const validationIcons = {
    warning: [
        "iconAlert",
        "M7.95 2.71c.58-.94 1.52-.94 2.1 0l7.69 12.58c.58.94.15 1.71-.96 1.71H1.22C.1 17-.32 16.23.26 15.29L7.95 2.71ZM8 6v5h2V6H8Zm0 7v2h2v-2H8Z"
    ],
    error: [
        "iconAlertCircle",
        "M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"
    ],
    success: [
        "iconCheckmark",
        "M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5 10-10Z"
    ]
};
export const makeStacksIcon = (name, pathConfig, { classes = [], width = 14, height = width } = {}) => {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.classList.add("svg-icon", name, ...classes);
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("aria-hidden", "true");
    if (typeof pathConfig === "string") {
        const path = document.createElementNS(ns, "path");
        path.setAttribute("d", pathConfig);
        svg.append(path);
        return [svg, path];
    }
    else {
        const paths = [];
        pathConfig.forEach((svgPath) => {
            const path = document.createElementNS(ns, "path");
            path.setAttribute("d", svgPath);
            svg.append(path);
            paths.push(path);
        });
        return [svg, paths[0]];
    }
};
