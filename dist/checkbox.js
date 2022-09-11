"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksCheckboxes = void 0;
const index_1 = require("./index");
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks checkbox
 * @param {Input.StacksInputTypes[]} checkboxes The checkboxes to create
 * @param {Input.StacksRadioCheckboxOptions} [options] checkbox configuration
 * @returns {HTMLElement[]}
 */
const makeStacksCheckboxes = (checkboxes, options) => {
    return index_1.Input.makeStacksRadiosOrCheckboxes(checkboxes, "checkbox", options);
};
exports.makeStacksCheckboxes = makeStacksCheckboxes;
