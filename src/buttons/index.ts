import { StacksCommonOptions } from "../index.js";

export type StacksIconButtonOptions = StacksCommonOptions & {
    title?: string;
    muted?: boolean;
    type?: "outlined" | "filled";
    primary?: boolean;
    danger?: boolean;
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
