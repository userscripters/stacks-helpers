import { Label, Icons } from "./index";
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
export const makeStacksSelect = (id, items, labelOptions, options = {}) => {
    const { disabled = false, size, validation, classes = [] } = options;
    const container = document.createElement("div");
    container.classList.add("d-flex", "gs4", "gsy", "fd-column");
    if (labelOptions) {
        (labelOptions.parentClasses || (labelOptions.parentClasses = [])).push("flex--item");
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
        const { value, text, selected = false } = item;
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
export const toggleValidation = (container, state) => {
    var _a, _b;
    container.classList.remove("has-success", "has-warning", "has-error");
    (_a = container.querySelector(".s-input-icon")) === null || _a === void 0 ? void 0 : _a.remove();
    if (!state)
        return;
    container.classList.add(`has-${state}`);
    const [name, path] = Icons.validationIcons[state];
    const [icon] = Icons.makeStacksIcon(name, path, {
        classes: ["s-input-icon"],
        width: 18
    });
    (_b = container.querySelector(".s-select")) === null || _b === void 0 ? void 0 : _b.append(icon);
};
