import { StacksCommonOptions, Label, Icons } from "./index";

export type StacksTextareaOptions = StacksCommonOptions & {
    /** The value of the textarea */
    value?: string;
    /** The title attached to the textarea */
    title?: string;
    /** The placeholder of the textarea */
    placeholder?: string;
    /** The textarea's size */
    size?: "sm" | "md" | "lg" | "xl";

    /** Optional validation configuration */
    validation?: {
        /** Validation state */
        state: "success" | "warning" | "error";
        /** Optional validation description (HTML allowed) */
        description?: string;
    };
};

const validationIcons = {
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

/**
 * @see https://stackoverflow.design/product/components/textarea/
 *
 * @summary creates a Stacks textarea
 * @param {string} id the textarea id
 * @param {StacksTextareaOptions} textareaOptions textarea configuration
 * @param {Label.StacksLabelOptions} [labelOptions] label configuration
 * @returns {HTMLDivElement}
 */
export const makeStacksTextarea = (
    id: string,
    textareaOptions: StacksTextareaOptions = {},
    labelOptions?: Label.StacksLabelOptions
): HTMLDivElement => {
    const {
        value = "",
        classes = [],
        placeholder = "",
        title = "",
        size,
        validation,
    } = textareaOptions;

    const textareaParent = document.createElement("div");
    textareaParent.classList.add("d-flex", "fd-column", "gs4", "gsy", ...classes);

    if (labelOptions) {
        const label = Label.makeStacksLabel(id, labelOptions);

        textareaParent.append(label);
    }

    const textarea = document.createElement("textarea");
    textarea.classList.add("flex--item", "s-textarea");
    textarea.id = id;
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.title = title;

    if (size) {
        textarea.classList.add(`s-textarea__${size}`);
    }

    textareaParent.append(textarea);

    if (validation) {
        toggleValidation(textareaParent, validation);
    }

    return textareaParent;
};
/**
 * @see https://stackoverflow.design/product/components/textarea/#validation-states
 *
 * @summary Toggles validation styling to a textarea
 * @param {HTMLDivElement} textareaParent the textarea's container
 * @param {StacksTextareaOptions["validation"]} validation configuration
 * @returns {void}
 */
export const toggleValidation = (
    textareaParent: HTMLDivElement,
    validation: StacksTextareaOptions["validation"],
): void => {
    textareaParent.classList.remove("has-success", "has-warning", "has-error");
    const oldTextarea = textareaParent.querySelector(".s-textarea") as HTMLTextAreaElement;

    if (!validation) {
        // toggle off all styles
        textareaParent.querySelector(".s-input-icon")?.remove();
        textareaParent.querySelector(".s-input-message")?.remove();

        const validationContainer = oldTextarea.parentElement;
        validationContainer?.replaceWith(oldTextarea);

        return;
    }

    const { state, description } = validation;

    textareaParent.classList.add(`has-${state}`);

    const [iconName, iconPath] = validationIcons[state];
    const [icon] = Icons.makeStacksIcon(iconName, iconPath, {
        classes: ["s-input-icon"],
        width: 18,
    });

    // switch validation
    if (oldTextarea.nextElementSibling) {
        oldTextarea.nextElementSibling.replaceWith(icon);

        const inputMessage = textareaParent.querySelector(".s-input-message");
        if (description) {
            if (inputMessage) {
                inputMessage.innerHTML = description;
            } else {
                createAndAppendDescription(description, textareaParent);
            }
        } else if (!description && inputMessage) {
            inputMessage.remove();
        }
    } else {
        // create validation
        const validationContainer = document.createElement("div");
        validationContainer.classList.add("d-flex", "ps-relative");
        validationContainer.append(oldTextarea, icon);
        textareaParent.append(validationContainer);

        if (description) {
            createAndAppendDescription(description, textareaParent);
        }
    }
};

const createAndAppendDescription = (
    description: string,
    appendTo: HTMLDivElement
): void => {
    const message = document.createElement("p");
    message.classList.add("flex--item", "s-input-message");
    message.innerHTML = description;

    appendTo.append(message);
};