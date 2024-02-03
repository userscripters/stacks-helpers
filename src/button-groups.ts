import { StacksCommonOptions } from "./index";
import { Buttons } from "./index";

export type GroupButton = {
    /** Button text (HTML allowed) */
    text: string | HTMLElement;
    /** Whether to select the button */
    selected?: boolean;
    /** Numerical count displayed in a button group */
    count?: number;
    /** Whether to wrap the button in a `<form>` element */
    form?: boolean;
    /** The type of the button (outlined and muted by default) */
    types?: Omit<Buttons.ButtonType, "outlined" | "muted">[];
};

export type StacksButtonGroupOptions = StacksCommonOptions;

/**
 * @see https://stackoverflow.design/product/components/button-groups/
 *
 * @summary Creates a Stacks button group
 * @param {GroupButton[]} buttons the buttons to display in the group
 * @param {StacksButtonGroupOptions} [options] configuration
 * @returns {HTMLDivElement}
 */
export const makeStacksButtonGroup = (
    buttons: GroupButton[],
    options: StacksButtonGroupOptions = {}
): HTMLDivElement => {
    const { classes = [] } = options;

    const container = document.createElement("div");
    container.classList.add("s-btn-group", ...classes);

    buttons.forEach((buttonConfig) => {
        const {
            text,
            selected = false,
            count,
            form = false,
            types = []
        } = buttonConfig;

        const button = Buttons.makeStacksButton(
            "",
            text,
            { type: ["muted", "outlined", ...(types as Buttons.ButtonType[])] }
        );

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
        } else {
            container.append(button);
        }
    });

    return container;
};