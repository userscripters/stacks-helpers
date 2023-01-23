import { Label } from "./index";
export type StacksToggleOptions = Pick<Label.StacksLabelOptions, "text">;
/**
 * @see https://stackoverflow.design/product/components/toggle-switch/
 *
 * @summary Creates a Stacks toggle switch
 * @param {string} id the switch id
 * @param {StacksToggleOptions} labelOptions attached label configuration
 * @param {boolean} on the state of the switch
 * @param {string[]} classes the classes to apply to the container of the switch
 * @returns {HTMLDivElement}
 */
export declare const makeStacksToggle: (id: string, labelOptions: StacksToggleOptions, on?: boolean, ...classes: string[]) => HTMLDivElement;
