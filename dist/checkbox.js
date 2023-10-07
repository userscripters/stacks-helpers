"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksCheckboxes = void 0;
const index_1 = require("./index");
const makeStacksCheckboxes = (checkboxes, options) => {
    return index_1.Input.makeStacksRadiosOrCheckboxes(checkboxes, "checkbox", options);
};
exports.makeStacksCheckboxes = makeStacksCheckboxes;
