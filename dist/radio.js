import { Input } from "./index";
export const makeStacksRadios = (radios, groupName, options) => {
    radios.forEach((radio) => {
        radio.name = groupName;
    });
    return Input.makeStacksRadiosOrCheckboxes(radios, "radio", options);
};
