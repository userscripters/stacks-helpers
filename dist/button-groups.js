import { Buttons } from "./index";
export const makeStacksButtonGroup = (buttons, options = {}) => {
    const { classes = [] } = options;
    const container = document.createElement("div");
    container.classList.add("s-btn-group", ...classes);
    buttons.forEach((buttonConfig) => {
        const { text, selected = false, count, form = false, types = [] } = buttonConfig;
        const button = Buttons.makeStacksButton("", text, { type: ["muted", "outlined", ...types] });
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
            formContainer.append(button);
            container.append(formContainer);
        }
        else {
            container.append(button);
        }
    });
    return container;
};
