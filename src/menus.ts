import { StacksCommonOptions, Checkbox, Input, Links } from "./index";

// either a nav item, a divider or a title
export type MenuItem = Omit<Links.StacksLinksOptions, "isButton"> | {
    /** The type of the separator (divider or title) */
    separatorType: "divider" | "title";
    /** The title (pass only if `type` is `title`) */
    separatorText?: string;
} | {
    /** Checkbox info */
    checkbox: Input.StacksInputTypes;
    /** Input config */
    checkboxOptions?: Input.StacksRadioCheckboxOptions;
};;

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
        const li = document.createElement("li");

        if ("separatorType" in navItem) {
            const {
                separatorType,
                separatorText
            } = navItem;

            li.setAttribute("role", "separator");
            li.classList.add(`s-menu--${separatorType}`);

            if (separatorText) li.innerText = separatorText;

            menu.append(li);

            return;
        } else if ("checkbox" in navItem) {
            const {
                checkbox,
                checkboxOptions
            } = navItem;

            // one checkbox returned, fetch second item of the array
            const [, input] = Checkbox.makeStacksCheckboxes(
                [checkbox],
                checkboxOptions
            );

            li.append(input);
            menu.append(li);

            return;
        }

        navItem.classes?.push(...childrenClasses);

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