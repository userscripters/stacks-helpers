"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksRadios = void 0;
const index_1 = require("./index");
const makeStacksRadios = (radios, groupName, options) => {
    radios.forEach((radio) => {
        radio.name = groupName;
    });
    return index_1.Input.makeStacksRadiosOrCheckboxes(radios, "radio", options);
};
exports.makeStacksRadios = makeStacksRadios;
