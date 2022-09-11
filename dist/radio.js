"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksRadios = void 0;
const index_1 = require("./index");
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks radio
 * @param {Input.StacksInputTypes[]} radios The radios to create
 * @param {Input.StacksRadioCheckboxOptions} [options] radio configuration
 * @returns {HTMLElement[]}
 */
const makeStacksRadios = (radios, groupName, options) => {
    radios.forEach((radio) => {
        radio.name = groupName;
    });
    return index_1.Input.makeStacksRadiosOrCheckboxes(radios, "radio", options);
};
exports.makeStacksRadios = makeStacksRadios;
