/**
 * @see https://stackoverflow.design/product/components/popovers
 *
 * @summary Creates a Stacks popover
 * @param {string} id The id of the popover
 * @param {HTMLElement} controller The controller element
 * @param {StacksPopoverOptions} options Popover configuration
 */
export const makeStacksPopover = (id, controller, options) => {
    const { referenceSelector, toggleClass, placement, toggle, autoShow, hideOnOutsideClick, manualArrowPositioning, callbacks, contentHtml, classes = [], } = options;
    controller.setAttribute("data-controller", "popover");
    controller.setAttribute("aria-controls", id);
    if (referenceSelector) {
        controller.setAttribute("data-s-popover-reference-selector", referenceSelector);
    }
    if (placement) {
        controller.setAttribute("data-s-popover-placement", placement);
    }
    if (toggleClass) {
        controller.setAttribute("data-s-popover-toggle-class", toggleClass);
    }
    if (toggle) {
        controller.setAttribute("data-action", "s-popover#toggle");
    }
    if (autoShow) {
        controller.setAttribute("data-s-popover-auto-show", "true");
    }
    if (hideOnOutsideClick) {
        controller.setAttribute("data-s-popover-hide-on-outside-click", hideOnOutsideClick);
    }
    if (callbacks) {
        Object
            .entries(callbacks)
            .map(([name, callback]) => [`s-popover:${name}`, callback])
            .forEach(([name, callback]) => {
            const eventName = name;
            const handler = callback;
            controller.addEventListener(eventName, handler);
        });
    }
    controller.addEventListener("s-popover:show", callbacks.show);
    const popover = document.createElement("div");
    popover.id = id;
    popover.setAttribute("role", "menu");
    popover.classList.add("s-popover", ...classes);
    const arrow = document.createElement("div");
    arrow.classList.add("s-popover--arrow");
    if (manualArrowPositioning) {
        arrow.classList.add(`s-popover--arrow__${manualArrowPositioning}`);
    }
    popover.append(arrow, contentHtml);
    return popover;
};
