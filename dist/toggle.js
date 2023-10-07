"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksToggle = void 0;
const index_1 = require("./index");
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
