import { Label } from "./index";

export type StacksToggleOptions = Pick<Label.StacksLabelOptions, "text">;

/**
 * @see https://stackoverflow.design/product/components/toggle-switch/
 * @param {string} id the switch id
 * @param {StacksToggleOptions} labelOptions attached label configuration
 * @param {boolean} on the state of the switch
 * @returns {HTMLDivElement}
 */
export const makeStacksToggle = (
    id: string,
    labelOptions: StacksToggleOptions,
    on = false
): HTMLDivElement => {
    const container = document.createElement("div");
    container.classList.add("d-flex", "gs8", "ai-center");

    const label = Label.makeStacksLabel(id, labelOptions);

    const toggleParent = document.createElement("div");
    toggleParent.classList.add("flex--item", "s-toggle-switch");

    const toggle = document.createElement("input");
    toggle.id = id;
    toggle.type = "checkbox";
    toggle.checked = on;

    const toggleSwitchDiv = document.createElement("div");
    toggleSwitchDiv.classList.add("s-toggle-switch--indicator");

    toggleParent.append(toggle, toggleSwitchDiv);
    container.append(label, toggleParent);

    return container;
}