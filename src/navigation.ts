import { StacksCommonOptions } from "./index";

export type StacksNavItems = StacksCommonOptions & {
    text: string;
    id: string;
    ariaControls?: string;
};

/**
 * @see https://stackoverflow.design/product/components/navigation/
 *
 * @summary creates a Stacks navigation component
 * @param {StacksNavItems[]} navItems the children of the nav element
 * @param {"button" | "a"} type whether in-page navigation is used
 * @param {number} selectIndex the index of the item to select
 * @returns {HTMLElementTagNameMap["nav"]}
 */
export const makeNavigation = (
    navItems: StacksNavItems[],
    type: "button" | "a",
    selectIndex = 0,
) => {
    const navigation = document.createElement("nav");

    const ul = document.createElement("ul");
    ul.classList.add("s-navigation");

    if (type === "button") {
        ul.setAttribute("role", "tablist");
        ul.setAttribute("data-controller", "s-navigation-tablist");
    }

    const children = navItems
        .map((item, i) => createNavItem(item, type, i === selectIndex));

    ul.append(...children);
    navigation.append(ul);

    return navigation;
};

/**
 * @summary creates a navigation item
 * @param {StacksNavItems} item info about the item to create
 * @param {"button" | "a"} type whether in-page navigation is used
 * @param {boolean} select whether the item should be selected
 * @returns {HTMLLIElement}
 */
const createNavItem = (
    {
        id,
        text,
        ariaControls
    }: StacksNavItems,
    type: "button" | "a",
    select: boolean
): HTMLLIElement => {
    const li = document.createElement("li");

    const wrapper = document.createElement(type);
    wrapper.id = id;
    wrapper.innerText = text;

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