import { Icons, StacksCommonOptions } from "../index";

export type StacksModalOptions = StacksCommonOptions & {
    /** Whether to style the modal as dangerous */
    danger?: boolean;
    /** Whether to increase the modal's width */
    fullscreen?: boolean;
    /** Celebratory modal styling */
    celebratory?: boolean;

    /** Title configuration */
    title: {
        /** Title text (HTML allowed) */
        text: string | HTMLElement;
        /** Title id */
        id?: string;
        /** Classes applied to the title h1 element */
        classes?: string[];
    };

    /** Body configuration */
    body: {
        /** Body HTML */
        bodyHtml: string | HTMLElement;
        /** Body id */
        id?: string;
        /** Classes applied to the body element */
        classes?: string[];
    };

    /** Footer configuration */
    footer: {
        /** Buttons appended to the modal's footer */
        buttons: {
            /** The button element */
            element: HTMLButtonElement;
            /** Whether to hide modal when that button is clicked */
            hideOnClick?: boolean;
        }[];
        /** Classes applied to the footer element */
        classes?: string[];
    };
};

/**
 * @see https://stackoverflow.design/product/components/modals/
 *
 * @summary creates a Stacks modal
 * @param {string} id the id of the modal
 * @param {StacksModalOptions} options configuration
 * @returns {HTMLElement}
 */
export const makeStacksModal = (
    id: string,
    options: StacksModalOptions
): HTMLElement => {
    const {
        classes = [],
        danger = false,
        fullscreen = false,
        celebratory = false,

        title: { text, id: titleId, classes: titleClasses = [] },
        body: { bodyHtml, id: bodyId, classes: bodyClasses = [] },
        footer: { buttons, classes: footerClasses = [] },
    } = options;

    const modal = document.createElement("aside");
    modal.id = id;
    modal.classList.add("s-modal", ...classes);
    modal.setAttribute("role", "dialog");
    modal.setAttribute("data-controller", "s-modal");
    modal.setAttribute("data-s-modal-target", "modal");

    if (danger) {
        modal.classList.add("s-modal__danger");
    }

    if (celebratory) {
        modal.classList.add("s-modal__celebration");
    }

    const dialog = document.createElement("div");
    dialog.classList.add("s-modal--dialog");
    dialog.setAttribute("role", "document");

    if (fullscreen) {
        dialog.classList.add("s-modal__full");
    }

    const header = document.createElement("h1");
    header.classList.add("s-modal--header", ...titleClasses);
    header.append(text);

    if (titleId) {
        header.id = titleId;
        modal.setAttribute("aria-labelledby", titleId);
    }

    const body = document.createElement("p");
    body.classList.add("s-modal--body", ...bodyClasses);
    body.append(bodyHtml);

    if (bodyId) {
        body.id = bodyId;
        modal.setAttribute("aria-describedby", bodyId);
    }

    const footer = document.createElement("div");
    footer.classList.add("d-flex", "gx8", "s-modal--footer", ...footerClasses);

    buttons.forEach((button) => {
        const { element, hideOnClick } = button;
        element.classList.add("flex--item");

        if (hideOnClick) {
            element.setAttribute("data-action", "s-modal#hide");
        }

        footer.append(element);
    });

    const [iconClear] = Icons.makeStacksIcon(
        "iconClear",
        "M15 4.41 13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41Z",
        { width: 18 }
    );

    const close = document.createElement("button");
    close.classList.add("s-modal--close", "s-btn", "s-btn__muted");
    close.setAttribute("type", "button");
    close.setAttribute("aria-label", "Close");
    close.setAttribute("data-action", "s-modal#hide");
    close.append(iconClear);

    dialog.append(header, body, footer, close);
    modal.append(dialog);

    return modal;
};
