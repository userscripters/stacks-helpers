import { Input } from "./index";
export const makeStacksCheckboxes = (checkboxes, options) => {
    return Input.makeStacksRadiosOrCheckboxes(checkboxes, "checkbox", options);
};
