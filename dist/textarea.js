import { Label, Icons } from "./index";
export const makeStacksTextarea = (id, textareaOptions = {}, labelOptions) => {
    const { value = "", classes = [], placeholder = "", title = "", size, validation, } = textareaOptions;
    const textareaParent = document.createElement("div");
    textareaParent.classList.add("d-flex", "fd-column", "gy4", ...classes);
    if (labelOptions) {
        const label = Label.makeStacksLabel(id, labelOptions);
        textareaParent.append(label);
    }
    const textarea = document.createElement("textarea");
    textarea.classList.add("flex--item", "s-textarea");
    textarea.id = id;
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.title = title;
    if (size) {
        textarea.classList.add(`s-textarea__${size}`);
    }
    textareaParent.append(textarea);
    if (validation) {
        toggleValidation(textareaParent, validation);
    }
    return textareaParent;
};
export const toggleValidation = (textareaParent, validation) => {
    var _a, _b;
    textareaParent.classList.remove("has-success", "has-warning", "has-error");
    const oldTextarea = textareaParent.querySelector(".s-textarea");
    if (!validation) {
        (_a = textareaParent.querySelector(".s-input-icon")) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = textareaParent.querySelector(".s-input-message")) === null || _b === void 0 ? void 0 : _b.remove();
        const validationContainer = oldTextarea.parentElement;
        validationContainer === null || validationContainer === void 0 ? void 0 : validationContainer.replaceWith(oldTextarea);
        return;
    }
    const { state, description } = validation;
    textareaParent.classList.add(`has-${state}`);
    const [iconName, iconPath] = Icons.validationIcons[state];
    const [icon] = Icons.makeStacksIcon(iconName, iconPath, {
        classes: ["s-input-icon"],
        width: 18,
    });
    if (oldTextarea.nextElementSibling) {
        oldTextarea.nextElementSibling.replaceWith(icon);
        const inputMessage = textareaParent.querySelector(".s-input-message");
        if (description) {
            if (inputMessage) {
                inputMessage.innerHTML = description;
            }
            else {
                createAndAppendDescription(description, textareaParent);
            }
        }
        else if (!description && inputMessage) {
            inputMessage.remove();
        }
    }
    else {
        const validationContainer = document.createElement("div");
        validationContainer.classList.add("d-flex", "ps-relative");
        validationContainer.append(oldTextarea, icon);
        textareaParent.append(validationContainer);
        if (description) {
            createAndAppendDescription(description, textareaParent);
        }
    }
};
const createAndAppendDescription = (description, appendTo) => {
    const message = document.createElement("p");
    message.classList.add("flex--item", "s-input-message");
    message.innerHTML = description;
    appendTo.append(message);
};
