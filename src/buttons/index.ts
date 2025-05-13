import { Icons, StacksCommonOptions } from "../index";

export type ButtonType = "outlined" | "link" | "muted"
                       | "danger" | "dropdown" | "unset" | "link"
                       | "facebook" | "google" | "github";

export type StacksIconButtonOptions = StacksCommonOptions & {
    /** The title attached to the button */
    title?: string;
    /** The style(s) of the button */
    type?: ButtonType[];
    /** Whether the button is primary or secondary */
    primary?: boolean;
    /** Whether to attach a loading icon to the button */
    loading?: boolean;
    /** Whether to visually activate the selected state of the button */
    selected?: boolean;
    /** Whether to style the button as disabled */
    disabled?: boolean;

    /** The number of an optionally appended appropriately-styled badge */
    badge?: number;
    /** The size of the button */
    size?: "xs" | "sm" | "md";

    /** Configuration of an optionally prepended SVG icon */
    iconConfig?: {
        /** The name of the SVG */
        name: string;
        /** The path of the SVG */
        path: string | string[];
        /** The width of the SVG */
        width?: number;
        /** The height of the SVG */
        height?: number;
    };
    /** `click` listener configuration */
    click?: {
        /** Handler called when the button is clicked */
        handler: (this: HTMLButtonElement, ev: MouseEvent) => void;
        /** The third argument to `.addEventListener()` */
        options?: boolean | AddEventListenerOptions;
    }
};

/**
 * @see https://stackoverflow.design/product/components/buttons/
 *
 * @summary creates a stacks button
 * @param {string} id id of the button
 * @param {string} text text of the button
 * @param {StacksIconButtonOptions} [options] configuration
 * @returns {HTMLButtonElement}
 */
export const makeStacksButton = (
    id: string,
    text: string | HTMLElement,
    options: StacksIconButtonOptions = {}
): HTMLButtonElement => {
    const {
        title,
        type = [],
        primary = false,
        loading = false,
        selected = false,
        disabled = false,
        badge,
        size,
        iconConfig,
        click,
        classes = [],
    } = options;

    const btn = document.createElement("button");
    if (id !== "") {
        btn.id = id;
    }

    btn.classList.add(
        "s-btn",
        ...type.map((name) => `s-btn__${name}`),
        ...classes
    );
    btn.append(text);

    btn.type = "button";
    btn.setAttribute("role", "button");

    const ariaLabel = title || (
        text instanceof HTMLElement
            ? text.textContent || ""
            : text
    );
    btn.setAttribute("aria-label", ariaLabel);

    if (primary) {
        btn.classList.add("s-btn__filled");
    }

    if (loading) {
        btn.classList.add("is-loading");
    }

    if (title) {
        btn.title = title;
    }

    if (selected) {
        btn.classList.add("is-selected");
    }

    if (disabled) {
        btn.disabled = true;
    }

    if (badge) {
        const badgeEl = document.createElement("span");
        badgeEl.classList.add("s-btn--badge");

        const badgeNumber = document.createElement("span");
        badgeNumber.classList.add("s-btn--number");
        badgeNumber.textContent = badge.toString();

        badgeEl.append(badgeNumber);
        btn.append(" ", badgeEl);
    }

    if (size) {
        btn.classList.add(`s-btn__${size}`);
    }

    if (iconConfig) {
        btn.classList.add("s-btn__icon");

        const { name, path, width, height } = iconConfig;
        const [icon] = Icons.makeStacksIcon(name, path, { width, height });

        btn.prepend(icon, " ");
    }

    if (click) {
        const { handler, options } = click;

        btn.addEventListener("click", handler, options);
    }

    return btn;
};
