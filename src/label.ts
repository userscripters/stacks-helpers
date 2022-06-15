import { StacksCommonOptions } from "./index";

export type StacksLabelOptions = StacksCommonOptions & {
    /** The text of the label (HTML allowed) */
    text: string;
    /** An optional description (HTML allowed) */
    description?: string;
    /** Classes applied to the label container */
    parentClasses?: string[];

    /** The text of the optional badge after the label (HTML allowed) */
    statusText?: string;
    /** The style of the optional badge after the label */
    statusType?: "optional" | "required" | "new" | "beta";
}

/**
 * @see https://stackoverflow.design/product/components/labels/
 *
 * @summary creates a Stacks label
 * @param {string} forId the label htmlFor attribute
 * @param {StacksLabelOptions} labelOptions label configuration
 * @returns {HTMLDivElement | HTMLLabelElement}
 */
export const makeStacksLabel = (
    forId: string,
    labelOptions: StacksLabelOptions,
): HTMLDivElement | HTMLLabelElement => {
    const {
        classes = [],
        parentClasses = [],
        text,
        description,
        statusText,
        statusType
    } = labelOptions;

    const labelParent = document.createElement("div");
    labelParent.classList.add(...parentClasses);

    const label = document.createElement("label");
    label.classList.add("s-label", ...classes);
    label.htmlFor = forId;
    label.innerHTML = text;

    // https://stackoverflow.design/product/components/labels/#status
    if (statusText && statusType) {
        const status = document.createElement("span");
        status.innerHTML = statusText;
        status.classList.add("s-label--status");

        if (statusType !== "optional") {
            status.classList.add(`s-label--status__${statusType}`);
        }

        label.append(" ", status);
    }

    if (description) {
        const p = document.createElement("p");
        p.classList.add("s-description", "mt2");
        p.innerHTML = description;

        // if there's a description, the label
        // must have a d-block class
        label.classList.add("d-block");
        label.append(p);
        labelParent.append(label);

        return labelParent;
    } else {
        label.classList.add("flex--item");

        return label;
    }
};