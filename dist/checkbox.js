import { Label } from "./index";
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary creates a Stacks checkbox
 * @param {StacksCheckboxes[]} checkboxes the checkboxes to create
 * @param {StacksCheckboxOption} checkboxOptions checkbox configuration
 * @returns {HTMLFieldSetElement}
 */
export const makeStacksCheckboxes = (checkboxes, options) => {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("d-flex", "gs8", "gsy", "fd-column");
    checkboxes.forEach((checkbox) => {
        const container = document.createElement("div");
        container.classList.add("flex--item");
        const parent = document.createElement("div");
        parent.classList.add("d-flex", "gs8", "gsx");
        if (checkbox.disabled)
            parent.classList.add("is-disabled");
        const inputParent = document.createElement("div");
        inputParent.classList.add("flex--item");
        const input = document.createElement("input");
        input.classList.add("s-checkbox");
        input.type = "checkbox";
        input.id = checkbox.id;
        input.checked = checkbox.state;
        input.disabled = checkbox.disabled;
        inputParent.append(input);
        const label = Label.makeStacksLabel(checkbox.id, {
            classes: ["fw-normal"],
            text: checkbox.label,
        });
        parent.append(inputParent, label);
        container.append(parent);
        fieldset.append(container);
    });
    if (options) {
        const { legendText = "", legendDescription = "", } = options;
        const legend = document.createElement("legend");
        legend.classList.add("flex--item", "s-label");
        legend.innerText = legendText;
        if (legendDescription) {
            const span = document.createElement("span");
            span.classList.add("ml4", "fw-normal", "fc-light");
            span.innerText = legendDescription;
            legend.append(" ", span);
        }
        fieldset.prepend(legend);
    }
    return fieldset;
};
