import { makeStacksIcon } from "../icons/index";
import { StacksCommonOptions } from "../index";

export type StacksToastType =
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "none";

export type StacksToastOptions = StacksCommonOptions &
    Partial<{
        buttons: HTMLButtonElement[];
        msgClasses: string[];
        important: boolean;
        type: StacksToastType;
    }>;

/**
 * @see https://stackoverflow.design/product/components/notices/
 * @summary builder for Stacks notifications
 */
export const makeStacksToast = (
    id: string,
    text: string,
    {
        buttons = [],
        classes = [],
        msgClasses = [],
        type = "none",
        important = false,
    }: StacksToastOptions = {}
) => {
    const wrap = document.createElement("div");
    wrap.classList.add("s-toast", ...classes);
    wrap.setAttribute("aria-hidden", "true");
    wrap.setAttribute("role", "alertdialog");
    wrap.setAttribute("aria-labelledby", "notice-message");
    wrap.id = id;

    const aside = document.createElement("aside");
    aside.classList.add("s-notice", "p8", "pl16");
    if (type !== "none") aside.classList.add(`s-notice__${type}`);
    if (important) aside.classList.add("s-notice__important");

    const msgWrap = document.createElement("div");
    msgWrap.classList.add(
        "d-flex",
        "gs16",
        "gsx",
        "ai-center",
        "jc-space-between",
        ...msgClasses
    );

    const message = document.createElement("div");
    message.classList.add("flex--item");
    message.textContent = text;

    const btnWrap = document.createElement("div");
    btnWrap.classList.add("d-flex");

    const dismissBtn = document.createElement("button");
    dismissBtn.type = "button";
    dismissBtn.classList.add("s-btn", "s-notice--btn");
    dismissBtn.setAttribute("aria-label", "Dismiss");
    buttons.push(dismissBtn);

    const [dismissIcon] = makeStacksIcon(
        "iconClearSm",
        "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41z"
    );
    dismissBtn.append(dismissIcon);

    btnWrap.append(...buttons);
    msgWrap.append(message, btnWrap);
    aside.append(msgWrap);
    wrap.append(aside);
    return wrap;
};

/**
 * @summary toggles the Stacks toast visibility
 */
export const toggleToast = (target: string | Element, show?: boolean) => {
    const toast =
        typeof target === "string" ? document.querySelector(target) : target;

    if (!toast) throw new ReferenceError(`missing toast: ${target}`);

    const isShown = toast?.getAttribute("aria-hidden") !== "true";
    toast.setAttribute(
        "aria-hidden",
        (show !== void 0 ? !show : isShown).toString()
    );

    return toast;
};

/**
 * @summary hides the Stacks toast
 */
export const hideToast = (target: string | Element, hideFor?: number) => {
    const toast = toggleToast(target, false);
    if (hideFor) setTimeout(() => showToast(toast), hideFor * 1e3);
};

/**
 * @summary shows the Stacks toast
 */
export const showToast = (target: string | Element, showFor?: number) => {
    const toast = toggleToast(target, true);
    if (showFor) setTimeout(() => hideToast(toast), showFor * 1e3);
};
