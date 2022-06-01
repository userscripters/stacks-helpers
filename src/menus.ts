import { StacksCommonOptions } from "./index";
import { Links } from "./index";

// either a nav item, a divider or a title
type NavItem = Omit<Links.StacksLinksOptions, "isButton"> | {
    type: "divider" | "title";
    text?: string;
};

export type StacksMenuOptions = StacksCommonOptions & {
    itemsType?: "a" | "button";
    childrenClasses?: string[];
    navItems: NavItem[];
}

/**
 * @see https://stackoverflow.design/product/components/menus/
 *
 * @summary creates a Stacks menu
 * @param {StacksMenuOptions} options configuration
 * @returns {HTMLUListElement}
 */
export const makeMenu = (
    options = {} as StacksMenuOptions
): HTMLUListElement => {
    const {
        itemsType = "a",
        childrenClasses = [],
        navItems,
        classes = []
    } = options;

    const menu = document.createElement("ul");
    menu.classList.add("s-menu", ...classes);
    menu.setAttribute("role", "menu");

    // TODO
    // https://stackoverflow.design/product/components/menus/#radio-groups
    navItems.forEach((navItem) => {
        if (navItem.type) {
            const element = document.createElement("li");
            element.setAttribute("role", "separator");
            element.classList.add(`s-menu--${navItem.type}`);

            if (navItem.text) element.innerText = navItem.text;

            menu.append(element);

            return;
        }

        navItem.classes?.push(...childrenClasses);

        const li = document.createElement("li");
        li.setAttribute("role", "menuitem");

        const item = Links.makeLink(
            Object.assign({
                isButton: itemsType === "button",
                blockLink: {},
            }, navItem)
        );

        li.append(item);
        menu.append(li);
    });

    return menu;
};