import { StacksCommonOptions } from "../index.js";

export type ButtonType = "outlined" | "link" | "filled";

export type StacksIconButtonOptions = StacksCommonOptions & {
    /** The title attached to the button */
    title?: string;
    /** Whether the button should be muted */
    muted?: boolean;
    /** The style of the button */
    type?: ButtonType;
    /** Whether the button is primary or secondary */
    primary?: boolean;
    /** Whether to style the button as dangerous */
    danger?: boolean;
    /** Whether to attach a loading icon to the button */
    loading?: boolean;
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
    text: string,
    {
        classes = [],
        title,
        danger = false,
        loading = false,
        muted = false,
        primary = false,
        type = "filled",
    }: StacksIconButtonOptions = {}
) => {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = text;
    btn.classList.add("s-btn", `s-btn__${type}`, ...classes);
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-label", title || text);

    if (danger) btn.classList.add("s-btn__danger");
    if (muted) btn.classList.add("s-btn__muted");
    if (primary) btn.classList.add("s-btn__primary");
    if (loading) btn.classList.add("is-loading");

    if (title) {
        btn.title = title;
    }

    return btn;
};
