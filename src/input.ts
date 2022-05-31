import { StacksCommonOptions, Icons, Label } from "./index";

export type StacksInputOptions = StacksCommonOptions & {
    value?: string;
    title?: string;
    placeholder?: string;
    isSearch?: boolean;
};

/**
 * @see https://stackoverflow.design/product/components/inputs/
 *
 * @summary creates a Stacks input
 * @param {string} id the input id
 * @param {StacksInputOptions} inputOptions input configuration
 * @param {StacksLabelOptions} [labelOptions] label configuration
 * @returns {HTMLDivElement}
 */
export const makeStacksInput = (
    id: string,
    inputOptions: StacksInputOptions = {},
    labelOptions?: Label.StacksLabelOptions
): HTMLDivElement => {
    const {
        value = "",
        classes = [],
        placeholder = "",
        title,
        isSearch
    } = inputOptions;

    const inputParent = document.createElement("div");
    inputParent.classList.add("d-flex", "ps-relative");

    const input = document.createElement("input");
    input.classList.add("s-input", ...classes);
    input.type = "text";
    input.id = input.name = id;
    input.placeholder = placeholder;
    input.value = value;

    if (title) input.title = title;

    if (isSearch) {
        input.classList.add("s-input__search");

        const [searchIcon] = Icons.makeStacksIcon(
            "iconSearch",
            "m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z",
            {
                classes: ["s-input-icon", "s-input-icon__search"],
                width: 18,
            }
        );

        inputParent.append(searchIcon);
    }

    inputParent.prepend(input);

    if (labelOptions) {
        (labelOptions.parentClasses ||= [])?.push("flex--item");
        const label = Label.makeStacksLabel(id, labelOptions);

        const container = document.createElement("div");
        container.classList.add("d-flex", "gs4", "gsy", "fd-column");

        container.append(label, inputParent);

        return container;
    }

    return inputParent;
};