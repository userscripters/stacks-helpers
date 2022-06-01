import { Links } from "./index";
/**
 * @see https://stackoverflow.design/product/components/menus/
 *
 * @summary creates a Stacks menu
 * @param {StacksMenuOptions} options configuration
 * @returns {HTMLUListElement}
 */
export const makeMenu = (options = {}) => {
    const { itemsType = "a", childrenClasses = [], navItems, classes = [] } = options;
    const menu = document.createElement("ul");
    menu.classList.add("s-menu", ...classes);
    menu.setAttribute("role", "menu");
    // TODO
    // https://stackoverflow.design/product/components/menus/#radio-groups
    navItems.forEach((navItem) => {
        var _a;
        if (navItem.separatorType) {
            const { separatorType, separatorText } = navItem;
            const element = document.createElement("li");
            element.setAttribute("role", "separator");
            element.classList.add(`s-menu--${separatorType}`);
            if (separatorText)
                element.innerText = separatorText;
            menu.append(element);
            return;
        }
        (_a = navItem.classes) === null || _a === void 0 ? void 0 : _a.push(...childrenClasses);
        const li = document.createElement("li");
        li.setAttribute("role", "menuitem");
        const item = Links.makeLink(Object.assign({
            isButton: itemsType === "button",
            blockLink: {},
        }, navItem));
        li.append(item);
        menu.append(li);
    });
    return menu;
};
