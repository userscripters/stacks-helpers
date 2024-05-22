import { Icons } from "./index";
export const makeBaseBar = (id, options) => {
    const { width, coloring, classes = [], } = options;
    const bar = document.createElement("div");
    bar.classList.add("s-progress--bar");
    bar.style.setProperty("width", `${width.toString()}%`);
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-valuenow", width.toString());
    const progress = document.createElement("div");
    progress.classList.add("s-progress", ...classes);
    progress.id = id;
    if (coloring) {
        progress.classList.add(`s-progress__${coloring}`);
    }
    progress.append(bar);
    return progress;
};
export const makeCircularBar = (id, options) => {
    const { width, classes = [], size } = options;
    const progress = document.createElement("div");
    progress.id = id;
    progress.classList.add("s-progress", "s-progress__circular", ...classes);
    progress.style.setProperty("--s-progress-value", `${(width / 100).toString()}`);
    if (size) {
        progress.classList.add(`s-progress__${size}`);
    }
    const bar = document.createElement("svg");
    bar.classList.add("s-progress-bar");
    bar.setAttribute("viewBox", "0 0 32 32");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-valuenow", width.toString());
    const circle = document.createElement("circle");
    circle.setAttribute("cx", "16");
    circle.setAttribute("cy", "16");
    circle.setAttribute("r", "14");
    bar.append(circle, circle.cloneNode(true));
    progress.innerHTML = bar.outerHTML;
    return progress;
};
export const makeSteppedBar = (id, items, options = {}) => {
    const { classes = [] } = options;
    const progress = document.createElement("div");
    progress.id = id;
    progress.classList.add("s-progress", "s-progress__stepped", ...classes);
    items.forEach((item, index) => {
        const { status, label, classes = [], href = "#", } = item;
        const step = document.createElement("div");
        step.classList.add("s-progress--step", ...classes);
        if (status) {
            step.classList.add(`is-${status}`);
        }
        const stop = document.createElement("a");
        stop.classList.add("s-progress--stop");
        stop.href = href;
        if (status === "complete") {
            const [checkmark] = Icons.makeStacksIcon("iconCheckmarkSm", "M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8Z");
            stop.append(checkmark);
        }
        step.append(stop);
        const rightBar = document.createElement("div");
        rightBar.classList.add("s-progress--bar", "s-progress--bar__right");
        const leftBar = document.createElement("div");
        leftBar.classList.add("s-progress--bar", "s-progress--bar__left");
        if (index === 0) {
            step.append(rightBar);
        }
        else if (index === items.length - 1) {
            step.append(leftBar);
        }
        else {
            step.append(rightBar, leftBar);
        }
        const labelEl = document.createElement("a");
        labelEl.classList.add("s-progress--label");
        labelEl.href = href;
        labelEl.textContent = label;
        step.append(labelEl);
        progress.append(step);
    });
    return progress;
};
