import { StacksCommonOptions } from "./index";
import { Links } from "./index";

// either a nav item, a divider or a title
type MenuItem = Omit<Links.StacksLinksOptions, "isButton"> & {
    /** The type of the separator (divider or title) */
    separatorType: "divider" | "title";
    /** The title (pass only if `type` is `title`) */
    separatorText?: string;
};

export type StacksMenuOptions = StacksCommonOptions & {
    /** The type of the menu items */
    itemsType?: "a" | "button";
    /** Classes applied to all the menu items */
    childrenClasses?: string[];
    /** The menu items */
    navItems: MenuItem[];
};

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
        if (navItem.separatorType) {
            const {
                separatorType,
                separatorText
            } = navItem;

            const element = document.createElement("li");
            element.setAttribute("role", "separator");
            element.classList.add(`s-menu--${separatorType}`);

            if (separatorText) element.innerText = separatorText;

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