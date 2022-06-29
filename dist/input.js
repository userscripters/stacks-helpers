import { Icons, Label } from "./index";
/**
 * @see https://stackoverflow.design/product/components/inputs/
 *
 * @summary creates a Stacks input
 * @param {string} id the input id
 * @param {StacksInputOptions} inputOptions input configuration
 * @param {StacksLabelOptions} [labelOptions] label configuration
 * @returns {HTMLDivElement}
 */
export const makeStacksInput = (id, inputOptions = {}, labelOptions) => {
    var _a;
    const { value = "", classes = [], placeholder = "", title, isSearch } = inputOptions;
    const inputParent = document.createElement("div");
    inputParent.classList.add("d-flex", "ps-relative");
    const input = document.createElement("input");
    input.classList.add("s-input", ...classes);
    input.type = "text";
    input.id = input.name = id;
    input.placeholder = placeholder;
    input.value = value;
    if (title)
        input.title = title;
    if (isSearch) {
        input.classList.add("s-input__search");
        const [searchIcon] = Icons.makeStacksIcon("iconSearch", "m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z", {
            classes: ["s-input-icon", "s-input-icon__search"],
            width: 18,
        });
        inputParent.append(searchIcon);
    }
    inputParent.prepend(input);
    if (labelOptions) {
        (_a = (labelOptions.parentClasses || (labelOptions.parentClasses = []))) === null || _a === void 0 ? void 0 : _a.push("flex--item");
        const label = Label.makeStacksLabel(id, labelOptions);
        const container = document.createElement("div");
        container.classList.add("d-flex", "gs4", "gsy", "fd-column");
        container.append(label, inputParent);
        return container;
    }
    return inputParent;
};
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 * @see https://stackoverflow.design/product/components/radio/
 *
 * @summary Creates a Stacks input
 * @param {StacksInputTypes[]} inputs The checkboxes to create
 * @param {StacksRadioCheckboxOptions} [options] checkbox configuration
 * @returns {HTMLFieldSetElement}
 */
export const makeStacksRadiosOrCheckboxes = (inputs, type, options) => {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("d-flex", "gs8", "gsy", "fd-column");
    if (options) {
        const { legendText = "", legendDescription = "", classes = [], } = options;
        fieldset.classList.add(...classes);
        const legend = document.createElement("legend");
        legend.classList.add("flex--item", "s-label");
        legend.innerText = legendText;
        if (legendDescription) {
            const span = document.createElement("span");
            span.classList.add("ml4", "fw-normal", "fc-light");
            span.innerText = legendDescription;
            legend.append(" ", span);
        }
        fieldset.append(legend);
    }
    const elements = inputs.map((inputType) => makeRadioCheckboxContainer(inputType, type));
    const group = (options === null || options === void 0 ? void 0 : options.group) || "vertical";
    if (group === "horizontal") {
        const flexItem = document.createElement("div");
        flexItem.classList.add("flex--item");
        const horizontalParent = document.createElement("div");
        horizontalParent.classList.add("d-flex", "gs16");
        horizontalParent.append(...elements);
        flexItem.append(horizontalParent);
        fieldset.append(flexItem);
    }
    else {
        fieldset.append(...elements);
    }
    return fieldset;
};
/**
 * @summary Helper for creating a checkbox/radio container
 * @param {StacksInputTypes} radioCheckbox input configuration
 * @returns {HTMLDivElement}
 */
const makeRadioCheckboxContainer = (radioCheckbox, type) => {
    const { id, labelConfig, selected = false, disabled = false, name } = radioCheckbox;
    const container = document.createElement("div");
    container.classList.add("flex--item");
    const parent = document.createElement("div");
    parent.classList.add("d-flex", "gs8", "gsx");
    if (disabled) {
        parent.classList.add("is-disabled");
    }
    const inputParent = document.createElement("div");
    inputParent.classList.add("flex--item");
    const input = document.createElement("input");
    input.classList.add(`s-${type}`);
    input.type = type;
    input.id = id;
    input.checked = selected;
    input.disabled = disabled;
    if (name) {
        input.name = name;
    }
    inputParent.append(input);
    (labelConfig.classes || (labelConfig.classes = [])).push("fw-normal");
    (labelConfig.parentClasses || (labelConfig.parentClasses = [])).push("flex--item");
    const label = Label.makeStacksLabel(id, labelConfig);
    parent.append(inputParent, label);
    container.append(parent);
    return container;
};
