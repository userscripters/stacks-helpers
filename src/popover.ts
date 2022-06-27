import { StacksCommonOptions } from "./index";

type PopoverPlacement = "auto" | "top" | "right" | "bottom" | "left";

export type StacksPopoverOptions = StacksCommonOptions & {
    /** Designates the element to use as the popover reference. The value defaults to the controller element. */
    referenceSelector?: string;
    /** A space-delineated list of classes to be toggled on the originating element when the popover is shown or hidden. */
    toggleClass?: string;
    /** Dictates where to place the popover in relation to the reference element. By default, the placement value is bottom. */
    placement?: PopoverPlacement | `${PopoverPlacement}-start` | `${PopoverPlacement}-end`;
    /** Whether to show the popover immediately when the Stacks controller is connected */
    autoShow?: boolean;
    /** Wires up the element to toggle the visibility of a generic popover. */
    toggle?: boolean;
    /** Whether to dismiss the popover on outside click */
    hideOnOutsideClick?: "always" | "never" | "if-in-viewport" | "after-dismissal";

    /** The not recommended way to position popover arrows */
    manualArrowPositioning?: "tc" | "tl" | "tr" | "bc" | "bl" | "br" | "rc" | "rt" | "rb" | "lc" | "lt" | "lb";

    /** The HTML main content of the popover */
    contentHtml: string;

    /** Callback configuration */
    callbacks: {
        /**
         * Handler called on `s-popover:show` event, which fires immediately before showing
         * and positioning the tooltip. This fires before the tooltip is first displayed to the user,
         * and can be used to create or initialize the tooltip element. Calling `.preventDefault()`
         * cancels the display of the popover.
         */
        show: (event: Event) => void;
        /** Handler called on `s-popover:shown` event, which fires immediately after showing the tooltip. */
        shown: (event: Event) => void;
        /**
         * Handler called on `s-popover:hide` event, which fires immediately before hiding the tooltip.
         * Calling `.preventDefault() `prevents the removal of the tooltip.
         */
        hide: (event: Event) => void;
        /** Handler called on `s-popover:hidden` event, which fires immediately after hiding the tooltip. */
        hidden: (event: Event) => void;
    }
};

/**
 * @see https://stackoverflow.design/product/components/popovers
 *
 * @summary Creates a Stacks popover
 * @param {string} id The id of the popover
 * @param {HTMLElement} controller The controller element
 * @param {StacksPopoverOptions} options Popover configuration
 */
export const makeStacksPopover = (
    id: string,
    controller: HTMLElement,
    options: StacksPopoverOptions,
): HTMLDivElement => {
    const {
        referenceSelector,
        toggleClass,
        placement,
        toggle,
        autoShow,
        hideOnOutsideClick,
        manualArrowPositioning,
        callbacks,
        contentHtml,
        classes = [],
    } = options;

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
                const eventName = name as `s-popover:${keyof typeof callbacks}`;
                const handler = callback as (event: Event) => void;

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
