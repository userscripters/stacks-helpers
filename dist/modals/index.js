/**
 * @see https://stackoverflow.design/product/components/modals/
 *
 * @summary creates a Stacks modal
 * @param {string} id id of the modal
 * @param {string} title modal title
 * @param {StacksModalOptions} options modal configuration
 * @returns {HTMLElement}
 */
export const makeConfigView = (id, title, { classes = [], danger = false, fullscreen = false, } = {}) => {
    const ariaLabelId = "modal-title";
    const ariaDescrId = "modal-description";
    const wrap = document.createElement("aside");
    wrap.classList.add("s-modal", ...classes);
    wrap.id = id;
    wrap.tabIndex = -1;
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-labelledby", ariaLabelId);
    wrap.setAttribute("aria-describeddy", ariaDescrId);
    wrap.setAttribute("aria-hidden", "true");
    if (danger)
        wrap.classList.add("s-modal__danger");
    const { dataset } = wrap;
    dataset.sModalTarget = "modal";
    dataset.controller = "s-modal";
    const doc = document.createElement("div");
    doc.classList.add("s-modal--dialog", "ps-relative", "hmx6");
    doc.setAttribute("role", "document");
    doc.id = `${id}-document`;
    if (fullscreen)
        doc.classList.add("s-modal__full");
    const ttl = document.createElement("h1");
    ttl.classList.add("s-modal--header");
    ttl.id = ariaLabelId;
    ttl.textContent = title;
    const close = document.createElement("button");
    close.classList.add("s-modal--close", "s-btn", "s-btn__muted");
    close.type = "button";
    close.dataset.action = "s-modal#hide";
    const svgNS = "http://www.w3.org/2000/svg";
    const closeIcon = document.createElementNS(svgNS, "svg");
    closeIcon.setAttribute("aria-hidden", "true");
    closeIcon.setAttribute("viewBox", "0 0 14 14");
    closeIcon.setAttribute("width", "14");
    closeIcon.setAttribute("height", "14");
    closeIcon.classList.add("svg-icon", "iconClearSm");
    const iconPath = document.createElementNS(svgNS, "path");
    iconPath.setAttribute("d", "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41z");
    closeIcon.append(iconPath);
    close.append(closeIcon);
    doc.append(ttl, close);
    wrap.append(doc);
    return wrap;
};
