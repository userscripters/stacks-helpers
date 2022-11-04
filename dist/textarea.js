"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleValidation = exports.makeStacksTextarea = void 0;
const index_1 = require("./index");
/**
 * @see https://stackoverflow.design/product/components/textarea/
 *
 * @summary creates a Stacks textarea
 * @param {string} id the textarea id
 * @param {StacksTextareaOptions} textareaOptions textarea configuration
 * @param {Label.StacksLabelOptions} [labelOptions] label configuration
 * @returns {HTMLDivElement}
 */
const makeStacksTextarea = (id, textareaOptions = {}, labelOptions) => {
    const { value = "", classes = [], placeholder = "", title = "", size, validation, } = textareaOptions;
    const textareaParent = document.createElement("div");
    textareaParent.classList.add("d-flex", "fd-column", "gy4", ...classes);
    if (labelOptions) {
        const label = index_1.Label.makeStacksLabel(id, labelOptions);
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
        (0, exports.toggleValidation)(textareaParent, validation);
    }
    return textareaParent;
};
exports.makeStacksTextarea = makeStacksTextarea;
/**
 * @see https://stackoverflow.design/product/components/textarea/#validation-states
 *
 * @summary Toggles validation styling to a textarea
 * @param {HTMLDivElement} textareaParent the textarea's container
 * @param {StacksTextareaOptions["validation"]} validation configuration
 * @returns {void}
 */
const toggleValidation = (textareaParent, validation) => {
    var _a, _b;
    textareaParent.classList.remove("has-success", "has-warning", "has-error");
    const oldTextarea = textareaParent.querySelector(".s-textarea");
    if (!validation) {
        // toggle off all styles
        (_a = textareaParent.querySelector(".s-input-icon")) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = textareaParent.querySelector(".s-input-message")) === null || _b === void 0 ? void 0 : _b.remove();
        const validationContainer = oldTextarea.parentElement;
        validationContainer === null || validationContainer === void 0 ? void 0 : validationContainer.replaceWith(oldTextarea);
        return;
    }
    const { state, description } = validation;
    textareaParent.classList.add(`has-${state}`);
    const [iconName, iconPath] = index_1.Icons.validationIcons[state];
    const [icon] = index_1.Icons.makeStacksIcon(iconName, iconPath, {
        classes: ["s-input-icon"],
        width: 18,
    });
    // switch validation
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
        // create validation
        const validationContainer = document.createElement("div");
        validationContainer.classList.add("d-flex", "ps-relative");
        validationContainer.append(oldTextarea, icon);
        textareaParent.append(validationContainer);
        if (description) {
            createAndAppendDescription(description, textareaParent);
        }
    }
};
exports.toggleValidation = toggleValidation;
const createAndAppendDescription = (description, appendTo) => {
    const message = document.createElement("p");
    message.classList.add("flex--item", "s-input-message");
    message.innerHTML = description;
    appendTo.append(message);
};
