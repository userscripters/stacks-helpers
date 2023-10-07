"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksButtonGroup = void 0;
const makeStacksButtonGroup = (buttons, options = {}) => {
    const { classes = [] } = options;
    const container = document.createElement("div");
    container.classList.add("s-btn-group", ...classes);
    buttons.forEach((buttonConfig) => {
        const { text, selected = false, count, form = false, } = buttonConfig;
        const button = document.createElement("button");
        button.classList.add("s-btn", "s-btn__muted", "s-btn__outlined");
        button.setAttribute("role", "button");
        button.append(text);
        if (selected) {
            button.classList.add("is-selected");
        }
        if (count) {
            const badge = document.createElement("span");
            badge.classList.add("s-btn--badge");
            const btnNumber = document.createElement("span");
            btnNumber.classList.add("s-btn--number");
            btnNumber.textContent = count.toString();
            badge.append(btnNumber);
            button.append(" ", badge);
        }
        if (form) {
            const formContainer = document.createElement("form");
            formContainer.classList.add("s-btn-group--container");
            formContainer.append(button);
            container.append(formContainer);
        }
        else {
            container.append(button);
        }
    });
    return container;
};
exports.makeStacksButtonGroup = makeStacksButtonGroup;
