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
    textareaParent.classList.add("d-flex", "fd-column", "gy4", ...classes);

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

    const [iconName, iconPath] = Icons.validationIcons[state];
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