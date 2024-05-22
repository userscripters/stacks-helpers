export const makeStacksLabel = (forId, labelOptions) => {
    const { classes = [], parentClasses = [], text, description, statusText, statusType } = labelOptions;
    const labelParent = document.createElement("div");
    labelParent.classList.add(...parentClasses);
    const label = document.createElement("label");
    label.classList.add("s-label", ...classes);
    label.htmlFor = forId;
    label.innerHTML = text;
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
        label.classList.add("d-block");
        label.append(p);
        labelParent.append(label);
        return labelParent;
    }
    else {
        label.classList.add("flex--item");
        return label;
    }
};
