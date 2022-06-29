import { StacksCommonOptions, Icons } from "./index";

export type StacksNoticesOptions = StacksCommonOptions & {
    /** The type of visual styles to be applied to the notice */
    type?: "info" | "success" | "warning" | "danger";
    /** Whether to apply important styles to the notice */
    important?: boolean;
    /** The name and path of an optional prepended SVG icon */
    icon?: string[];
    /** The text appearing on the notice (HTML allowed) */
    text: string | HTMLElement;
};

/**
 * @see https://stackoverflow.design/product/components/notices/
 *
 * @summary Creates a Stacks notice
 * @param {StacksNoticesOptions} options configuration
 * @returns {HTMLElement}
 */
export const makeStacksNotice = (
    options: StacksNoticesOptions
): HTMLElement => {
    const {
        type,
        important = false,
        icon,
        text,
        classes = [],
    } = options;

    const notice = document.createElement("aside");
    notice.classList.add("s-notice", ...classes);
    notice.setAttribute("role", important ? "alert" : "status");

    if (type) {
        notice.classList.add(`s-notice__${type}`);
    }

    if (important) {
        notice.classList.add("s-notice__important");
    }

    if (icon) {
        notice.classList.add("d-flex");

        const iconContainer = document.createElement("div");
        iconContainer.classList.add("flex--item", "mr8");

        const [name, path] = icon;
        const [svgIcon] = Icons.makeStacksIcon(name, path, { width: 18 });

        iconContainer.append(svgIcon);

        const textContainer = document.createElement("div");
        textContainer.classList.add("flex--item", "lh-lg");
        textContainer.append(text);

        notice.append(iconContainer, textContainer);
    } else {
        const p = document.createElement("p");
        p.classList.add("m0");
        p.append(text);

        notice.append(p);
    }

    return notice;
};