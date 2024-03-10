import { StacksCommonOptions } from "./index";

type NavDivider = {
    /** The title of nav group */
    title: string;
};

type NavItem = StacksCommonOptions & {
    /** The item text */
    text: string;
    /** The item's id */
    id?: string;
    /** The id of the element the item controls */
    ariaControls?: string;
    /** Whether to add a small caret that indicates a dropdown */
    dropdown?: boolean;
    /** Where the nav item should point */
    href?: string;
};

type StacksNavItems = NavItem | NavDivider;

export type StacksNavigationOptions = StacksCommonOptions & {
    /** Items of the `<nav>` element */
    navItems: StacksNavItems[];
    /** Whether in-page navigation is used */
    type?: "button" | "a";
    /** The index of the item to select */
    selectIndex?: number;
    /** The `aria-label` attribute of the `<nav>` element */
    ariaLabel?: string;
    /** Various nav styles */
    navType?: "muted" | "scroll" | "sm" | "vertical";
};

/**
 * @see https://stackoverflow.design/product/components/navigation/
 *
 * @summary creates a Stacks navigation component
 * @param {StacksNavigationOptions} options configuration
 * @returns {HTMLElementTagNameMap["nav"]}
 */
export const makeNavigation = (
    options = {} as StacksNavigationOptions
) => {
    const {
        navItems,
        type = "a",
        selectIndex = 0,
        ariaLabel,
        navType,
        classes = []
    } = options;

    const navigation = document.createElement("nav");

    if (classes.length > 0) {
        navigation.classList.add(...classes);
    }

    if (ariaLabel) {
        navigation.setAttribute("aria-label", ariaLabel);
    }

    const ul = document.createElement("ul");
    ul.classList.add("s-navigation");

    if (navType) {
        ul.classList.add(`s-navigation__${navType}`);
    }

    if (type === "button") {
        ul.setAttribute("role", "tablist");
        ul.setAttribute("data-controller", "s-navigation-tablist");
    }

    const children = navItems
        .map((item, i) => {
            if ("title" in item) {
                const li = document.createElement("li");
                li.classList.add("s-navigation--title");
                li.textContent = item.title;

                return li;
            }

            return createNavItem(item, type, i === selectIndex);
        });

    ul.append(...children);
    navigation.append(ul);

    return navigation;
};

/**
 * @summary creates a navigation item
 * @param {NavItem} item info about the item to create
 * @param {"button" | "a"} type whether in-page navigation is used
 * @param {boolean} select whether the item should be selected
 * @returns {HTMLLIElement}
 */
export const createNavItem = (
    {
        id,
        text,
        ariaControls,
        dropdown,
        href = "#",
        classes = []
    }: NavItem,
    type: "button" | "a",
    select: boolean
): HTMLLIElement => {
    const li = document.createElement("li");

    if (classes.length > 0) {
        li.classList.add(...classes);
    }

    const wrapper = document.createElement(type);
    wrapper.textContent = text;

    if (id) {
        wrapper.id = id;
    }

    if (wrapper instanceof HTMLAnchorElement) {
        wrapper.href = href;
    }

    if (dropdown) {
        wrapper.classList.add("s-navigation--item__dropdown");
    }

    wrapper.classList.add("s-navigation--item");
    if (select) wrapper.classList.add("is-selected");

    if (type === "button") {
        wrapper.setAttribute("role", "tab");
        wrapper.type = "button";

        if (ariaControls) wrapper.setAttribute("aria-controls", ariaControls);
    }

    li.append(wrapper);

    return li;
};