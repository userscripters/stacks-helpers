"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNavItem = exports.makeNavigation = void 0;
const makeNavigation = (options = {}) => {
    const { navItems, type = "a", selectIndex = 0, ariaLabel, navType, classes = [] } = options;
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
        return (0, exports.createNavItem)(item, type, i === selectIndex);
    });
    ul.append(...children);
    navigation.append(ul);
    return navigation;
};
exports.makeNavigation = makeNavigation;
const createNavItem = ({ id, text, ariaControls, dropdown, href = "#", classes = [] }, type, select) => {
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
    if (select)
        wrapper.classList.add("is-selected");
    if (type === "button") {
        wrapper.setAttribute("role", "tab");
        wrapper.type = "button";
        if (ariaControls)
            wrapper.setAttribute("aria-controls", ariaControls);
    }
    li.append(wrapper);
    return li;
};
exports.createNavItem = createNavItem;
