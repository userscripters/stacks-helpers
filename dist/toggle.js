"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksToggle = void 0;
const index_1 = require("./index");
/**
 * @see https://stackoverflow.design/product/components/toggle-switch/
 *
 * @summary Creates a Stacks toggle switch
 * @param {string} id the switch id
 * @param {StacksToggleOptions} labelOptions attached label configuration
 * @param {boolean} on the state of the switch
 * @param {string[]} classes the classes to apply to the container of the switch
 * @returns {HTMLDivElement}
 */
const makeStacksToggle = (id, labelOptions, on = false, ...classes) => {
    const container = document.createElement("div");
    container.classList.add("d-flex", "g8", "ai-center", ...classes);
    const label = index_1.Label.makeStacksLabel(id, labelOptions);
    const toggle = document.createElement("input");
    toggle.id = id;
    toggle.classList.add("s-toggle-switch");
    toggle.type = "checkbox";
    toggle.checked = on;
    container.append(label, toggle);
    return container;
};
exports.makeStacksToggle = makeStacksToggle;
