import { StacksCommonOptions, Label, Icons } from "./index";

export type SelectOption = {
    /** The value of the option */
    value: string;
    /** The option visible text */
    text: string;
    /** Whether the option is selected */
    selected?: boolean;
}

export type StacksSelectOptions = StacksCommonOptions & {
    /** Whether the select is disabled */
    disabled?: boolean;
    /** The size of the select element */
    size?: "sm" | "md" | "lg" | "xl";
    /** The validation state */
    validation?: "success" | "warning" | "error";
}

/**
 * @see https://stackoverflow.design/product/components/select/
 *
 * @summary Creates a Stacks select element
 * @param {string} id The id of the select
 * @param {SelectOption[]} items The options to display in the select
 * @param {Label.StacksLabelOptions} [labelOptions] label configuration
 * @param {StacksSelectOptions} [options] configuration
 * @returns {HTMLDivElement}
 */
export const makeStacksSelect = (
    id: string,
    items: SelectOption[],
    labelOptions?: Label.StacksLabelOptions,
    options: StacksSelectOptions = {},
): HTMLDivElement => {
    const {
        disabled = false,
        size,
        validation,
        classes = []
    } = options;

    const container = document.createElement("div");
    container.classList.add("d-flex", "gs4", "gsy", "fd-column");

    if (labelOptions) {
        (labelOptions.parentClasses ||= []).push("flex--item");

        const label = Label.makeStacksLabel(id, labelOptions);
        container.append(label);
    }

    const selectContainer = document.createElement("div");
    selectContainer.classList.add("flex--item", "s-select");

    if (size) {
        selectContainer.classList.add(`s-select__${size}`);
    }

    const select = document.createElement("select");
    select.id = id;
    select.classList.add(...classes);

    if (disabled) {
        container.classList.add("is-disabled");
        select.disabled = true;
    }

    items.forEach((item) => {
        const {
            value,
            text,
            selected = false
        } = item;

        const option = document.createElement("option");
        option.value = value;
        option.text = text;
        option.selected = selected;

        select.append(option);
    });

    selectContainer.append(select);
    container.append(selectContainer);

    if (validation) {
        toggleValidation(container, validation);
    }

    return container;
};

/**
 * @see https://stackoverflow.design/product/components/select/#validation-states
 *
 * @summary Toggles validation styling to a select
 * @param {HTMLDivElement} container the select's container
 * @param {StacksSelectOptions["validation"]} [state] configuration
 * @returns {void}
 */
export const toggleValidation = (
    container: HTMLDivElement,
    state?: StacksSelectOptions["validation"]
): void => {
    container.classList.remove("has-success", "has-warning", "has-error");
    container.querySelector(".s-input-icon")?.remove();

    if (!state) return;

    container.classList.add(`has-${state}`);
    const [name, path] = Icons.validationIcons[state];
    const [icon] = Icons.makeStacksIcon(name, path, {
        classes: ["s-input-icon"],
        width: 18
    });

    container.querySelector(".s-select")?.append(icon);
};