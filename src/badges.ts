import { StacksCommonOptions } from "./index";

type BadgeTypes = "gold" | "silver" | "bronze"
                | "bounty" | "votes" | "answered" | "rep" | "rep-down" | "important"
                | "admin" | "moderator" | "staff"
                | "muted" | "filled" | "info" | "warning" | "danger";

export type StacksBadgesOptions = StacksCommonOptions & {
    // https://stackoverflow.design/product/components/badges/#badges-default
    /** The type of the bling */
    blingColor?: "gold" | "silver" | "bronze";

    /** The type of the badge */
    type?: BadgeTypes[];

    // https://stackoverflow.design/product/components/badges/#badge-sizes
    /** The size of the badge (SMall or eXtra Small) */
    size?: "sm" | "xs";

    /** The text in the badge */
    text: string;

    /** SVG icon attached to the badge */
    icon?: HTMLElement;
};

/**
 * @see https://stackoverflow.design/product/components/badges/
 *
 * @summary creates a Stacks badge
 * @param {StacksBadgesOptions} options configuration
 * @returns {HTMLSpanElement}
 */
export const makeStacksBadge = (
    options: StacksBadgesOptions
): HTMLSpanElement => {
    const {
        classes = [],
        blingColor = "",
        type = "",
        size = "",
        text,
        icon,
    } = options;

    const badge = document.createElement("span");
    badge.classList.add("s-badge", ...classes);

    if (type) {
        const typeClasses = type.map((name) => `s-badge__${name}`);

        badge.classList.add(...typeClasses);
    }

    if (size) {
        badge.classList.add(`s-badge__${size}`);
    }

    if (icon) {
        badge.classList.add("s-badge__icon");
        badge.append(icon, " ");
    }

    if (blingColor) {
        const bling = makeBling("span", blingColor, text);

        badge.append(bling);
    } else {
        badge.append(text);
    }

    return badge;
};

/**
 * @summary Creates gold/silver/bronze bling
 * @param {keyof HTMLElementTagNameMap} elementType The type of the container element
 * @param {"gold" | "silver" | "bronze"} color The badge colour
 * @param {string} count The badge count
 * @returns {HTMLElement}
 */
export const makeBling = (
    elementType: keyof HTMLElementTagNameMap,
    color: "gold" | "silver" | "bronze",
    count: string
): HTMLElement => {
    const element = document.createElement(elementType);
    element.classList.add("s-award-bling", `s-award-bling__${color}`);
    element.innerText = count;

    return element;
};