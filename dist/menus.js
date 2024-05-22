import { Checkbox, Links } from "./index";
export const makeMenu = (options = {}) => {
    const { itemsType = "a", childrenClasses = [], navItems, classes = [] } = options;
    const menu = document.createElement("ul");
    menu.classList.add("s-menu", ...classes);
    menu.setAttribute("role", "menu");
    navItems.forEach((navItem) => {
        var _a;
        const li = document.createElement("li");
        if ("popover" in navItem && navItem.popover) {
            const { position = "auto", html, } = navItem.popover;
            Stacks.setTooltipHtml(li, html, {
                placement: position
            });
        }
        if ("separatorType" in navItem) {
            const { separatorType, separatorText } = navItem;
            li.setAttribute("role", "separator");
            li.classList.add(`s-menu--${separatorType}`);
            if (separatorText)
                li.textContent = separatorText;
            menu.append(li);
            return;
        }
        else if ("checkbox" in navItem) {
            const { checkbox, checkboxOptions } = navItem;
            const [, input] = Checkbox.makeStacksCheckboxes([checkbox], checkboxOptions);
            li.append(input);
            menu.append(li);
            return;
        }
        (_a = navItem.classes) === null || _a === void 0 ? void 0 : _a.push(...childrenClasses);
        li.setAttribute("role", "menuitem");
        const item = Links.makeLink(Object.assign({
            isButton: itemsType === "button" || navItem.isButton,
            blockLink: {},
        }, navItem));
        li.append(item);
        menu.append(li);
    });
    return menu;
};
