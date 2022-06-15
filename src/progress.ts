import { Icons, StacksCommonOptions } from "./index";

// TODO: are these needed?
// - https://stackoverflow.design/product/components/progress-bars/#privileges
// - https://stackoverflow.design/product/components/progress-bars/#badges

export type StacksBaseBarOptions = StacksCommonOptions & {
    /** The width to colour */
    width: number;
    /** Optional colour variation */
    coloring?: "brand" | "info";
}

/**
 * @see https://stackoverflow.design/product/components/progress-bars/#base-style
 *
 * @summary Create a Stacks base progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksBaseBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
export const makeBaseBar = (
    id: string,
    options: StacksBaseBarOptions
): HTMLDivElement => {
    const {
        width,
        coloring,
        classes = [],
    } = options;

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

export type StacksCircularBarOptions = StacksCommonOptions & Omit<StacksBaseBarOptions, "coloring"> & {
    /** The size of the bar */
    size?: "sm" | "md" | "lg";
};

/**
 * @see https://stackoverflow.design/product/components/progress-bars/#circular
 *
 * @summary Create a Stacks circular progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksCircularBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
export const makeCircularBar = (
    id: string,
    options: StacksCircularBarOptions
): HTMLDivElement => {
    const {
        width,
        classes = [],
        size
    } = options;

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

export type StacksSegmentedBarOptions = StacksBaseBarOptions & {
    /** The total number of segments to include */
    segments: number;
};

/**
 * @see https://stackoverflow.design/product/components/progress-bars/#segmented
 *
 * @summary Create a Stacks segmented progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksSegmentedBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
export const makeSegmentedBar = (
    id: string,
    options: StacksSegmentedBarOptions
): HTMLDivElement => {
    const {
        width,
        segments,
        coloring,
        classes = [],
    } = options;

    const progress = document.createElement("div");
    progress.id = id;
    progress.classList.add("s-progress", "s-progress__segmented", ...classes);

    if (coloring) {
        progress.classList.add(`s-progress__${coloring}`);
    }

    const bar = document.createElement("div");
    bar.classList.add("s-progress--bar");
    bar.style.setProperty("width", `${width.toString()}%"`);

    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-valuenow", width.toString());

    const ol = document.createElement("ol");
    ol.classList.add("s-progress--segments");

    for (let i = 0; i < segments + 1; i++) {
        const li = document.createElement("li");
        ol.append(li);
    }

    progress.append(bar, ol);

    return progress;
};

export type SteppedBarItem = {
    /** Whether the current stage has been completed or is active */
    status?: "complete" | "active";
    /** A short description of the stage */
    label: string;
    /** Classes applied to the item */
    classes: string[];
    /** The link the stage should point to */
    href?: string;
};

/**
 * @see https://stackoverflow.design/product/components/progress-bars/#stepped
 *
 * @summary Create a Stacks stepped progress bar
 * @param id - the id of the progress bar
 * @param items - the items to display
 * @param options - configuration
 * @returns {HTMLDivElement}
 */
export const makeSteppedBar = (
    id: string,
    items: SteppedBarItem[],
    options: StacksCommonOptions = {}
): HTMLDivElement => {
    const { classes = [] } = options;

    const progress = document.createElement("div");
    progress.id = id;
    progress.classList.add("s-progress", "s-progress__stepped", ...classes);

    items.forEach((item, index) => {
        const {
            status,
            label,
            classes = [],
            href = "#",
        } = item;

        const step = document.createElement("div");
        step.classList.add("s-progress--step", ...classes);

        if (status) {
            step.classList.add(`is-${status}`);
        }

        const stop = document.createElement("a");
        stop.classList.add("s-progress--stop");
        stop.href = href;

        if (status === "complete") {
            const [checkmark] = Icons.makeStacksIcon(
                "iconCheckmarkSm",
                "M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8Z"
            );
            stop.append(checkmark);
        }

        step.append(stop);

        const rightBar = document.createElement("div");
        rightBar.classList.add("s-progress--bar", "s-progress--bar__right");

        const leftBar = document.createElement("div");
        leftBar.classList.add("s-progress--bar", "s-progress--bar__left");

        if (index === 0) { // first item
            step.append(rightBar);
        } else if (index === items.length - 1) { // last item
            step.append(leftBar);
        } else {
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
