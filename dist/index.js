/**
 * @see https://stackoverflow.design/product/components/notices/
 * @summary builder for Stacks notifications
 */
export const makeStacksToast = (id, text, { buttons = [], classes = [], msgClasses = [] } = {}) => {
    const wrap = document.createElement("div");
    wrap.classList.add("s-toast", ...classes);
    wrap.setAttribute("aria-hidden", "true");
    wrap.setAttribute("role", "alertdialog");
    wrap.setAttribute("aria-labelledby", "notice-message");
    wrap.id = id;
    const aside = document.createElement("aside");
    aside.classList.add("s-notice", "s-notice_success", "p8", "pl16");
    const msgWrap = document.createElement("div");
    msgWrap.classList.add("d-flex", "gs16", "gsx", "ai-center", "jc-space-between", ...msgClasses);
    const message = document.createElement("div");
    message.classList.add("flex--item");
    message.textContent = text;
    const btnWrap = document.createElement("div");
    btnWrap.classList.add("d-flex");
    const dismissBtn = document.createElement("button");
    dismissBtn.type = "button";
    dismissBtn.classList.add("s-btn", "s-notice--btn");
    dismissBtn.setAttribute("aria-label", "Dismiss");
    buttons.push(dismissBtn);
    btnWrap.append(...buttons);
    msgWrap.append(message, btnWrap);
    aside.append(msgWrap);
    wrap.append(aside);
    return wrap;
};
