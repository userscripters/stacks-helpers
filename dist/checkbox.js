import { Label } from "./index";
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks checkbox
 * @param {StacksCheckboxes[]} checkboxes The checkboxes to create
 * @param {StacksCheckboxOption} [options] checkbox configuration
 * @returns {HTMLFieldSetElement}
 */
export const makeStacksCheckboxes = (checkboxes, options) => {
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
    const elements = checkboxes.map((checkbox) => makeCheckboxContainer(checkbox));
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
 * @summary Helper for creating a checkbox container
 * @param {StacksCheckboxes} checkbox checkbox configuration
 * @returns {HTMLDivElement}
 */
const makeCheckboxContainer = (checkbox) => {
    const { id, labelConfig, selected = false, disabled = false, } = checkbox;
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
    input.classList.add("s-checkbox");
    input.type = "checkbox";
    input.id = id;
    input.checked = selected;
    input.disabled = disabled;
    inputParent.append(input);
    (labelConfig.classes || (labelConfig.classes = [])).push("fw-normal");
    (labelConfig.parentClasses || (labelConfig.parentClasses = [])).push("flex--item");
    const label = Label.makeStacksLabel(id, labelConfig);
    parent.append(inputParent, label);
    container.append(parent);
    return container;
};
