var StacksHelpers;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Notifications = exports.Modals = exports.Icons = exports.Buttons = exports.UserCard = exports.Toggle = exports.Textarea = exports.Tag = exports.Spinner = exports.Select = exports.Radio = exports.Popover = exports.Progress = exports.Pagination = exports.Notice = exports.Navigation = exports.Menu = exports.Links = exports.Label = exports.Input = exports.Indicator = exports.Checkbox = exports.ButtonGroup = exports.Breadcrumb = exports.Banners = exports.Badges = exports.Avatar = void 0;
const Avatar = __webpack_require__(1);
exports.Avatar = Avatar;
const Badges = __webpack_require__(2);
exports.Badges = Badges;
const Banners = __webpack_require__(3);
exports.Banners = Banners;
const Breadcrumb = __webpack_require__(4);
exports.Breadcrumb = Breadcrumb;
const ButtonGroup = __webpack_require__(5);
exports.ButtonGroup = ButtonGroup;
const Checkbox = __webpack_require__(6);
exports.Checkbox = Checkbox;
const Indicator = __webpack_require__(7);
exports.Indicator = Indicator;
const Input = __webpack_require__(8);
exports.Input = Input;
const Label = __webpack_require__(9);
exports.Label = Label;
const Links = __webpack_require__(10);
exports.Links = Links;
const Menu = __webpack_require__(11);
exports.Menu = Menu;
const Navigation = __webpack_require__(12);
exports.Navigation = Navigation;
const Notice = __webpack_require__(13);
exports.Notice = Notice;
const Pagination = __webpack_require__(14);
exports.Pagination = Pagination;
const Progress = __webpack_require__(15);
exports.Progress = Progress;
const Popover = __webpack_require__(16);
exports.Popover = Popover;
const Radio = __webpack_require__(17);
exports.Radio = Radio;
const Select = __webpack_require__(18);
exports.Select = Select;
const Spinner = __webpack_require__(19);
exports.Spinner = Spinner;
const Tag = __webpack_require__(20);
exports.Tag = Tag;
const Textarea = __webpack_require__(21);
exports.Textarea = Textarea;
const Toggle = __webpack_require__(22);
exports.Toggle = Toggle;
const UserCard = __webpack_require__(23);
exports.UserCard = UserCard;
const Buttons = __webpack_require__(24);
exports.Buttons = Buttons;
const Icons = __webpack_require__(25);
exports.Icons = Icons;
const Modals = __webpack_require__(26);
exports.Modals = Modals;
const Notifications = __webpack_require__(27);
exports.Notifications = Notifications;


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeAvatar = void 0;
/**
 * @see https://stackoverflow.design/product/components/avatar/
 *
 * @summary creates a Stacks avatar
 * @param {StacksAvatarOptions} options configuration
 * @returns {HTMLAnchorElement}
 */
const makeAvatar = (options = {}, elementType = "a") => {
    const { size = "", href = "", src, classes = [] } = options;
    const avatar = document.createElement(elementType);
    avatar.classList.add("s-avatar", ...classes);
    if (size) { // default 16px
        avatar.classList.add(`s-avatar__${size}`);
    }
    if (href && avatar instanceof HTMLAnchorElement) {
        avatar.href = href;
    }
    const img = document.createElement("img");
    img.classList.add("s-avatar--image");
    img.src = src;
    avatar.append(img);
    return avatar;
};
exports.makeAvatar = makeAvatar;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeBling = exports.makeStacksBadge = void 0;
/**
 * @see https://stackoverflow.design/product/components/badges/
 *
 * @summary creates a Stacks badge
 * @param {StacksBadgesOptions} options configuration
 * @returns {HTMLSpanElement}
 */
const makeStacksBadge = (options) => {
    const { classes = [], blingColor = "", type = "", size = "", text, icon, } = options;
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
        const bling = (0, exports.makeBling)("span", blingColor, text);
        badge.append(bling);
    }
    else {
        badge.append(text);
    }
    return badge;
};
exports.makeStacksBadge = makeStacksBadge;
/**
 * @summary Creates gold/silver/bronze bling
 * @param {keyof HTMLElementTagNameMap} elementType The type of the container element
 * @param {"gold" | "silver" | "bronze"} color The badge colour
 * @param {string} count The badge count
 * @returns {HTMLElement}
 */
const makeBling = (elementType, color, count) => {
    const element = document.createElement(elementType);
    element.classList.add("s-award-bling", `s-award-bling__${color}`);
    element.innerText = count;
    return element;
};
exports.makeBling = makeBling;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksBanner = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/banners/
 *
 * @summary Creates a Stacks banner
 * @param {StacksBannerOptions} options configuration
 * @returns {HTMLElement}
 */
const makeStacksBanner = (options) => {
    const { style, text, important = false, pinned = false, icon, classes = [], } = options;
    const banner = document.createElement("aside");
    banner.classList.add("s-banner", `s-banner__${style}`, "js-notice-banner", ...classes);
    banner.setAttribute("role", "alert");
    if (important) {
        banner.classList.add("s-banner__important");
    }
    if (pinned) {
        banner.classList.add("is-pinned");
    }
    const container = document.createElement("div");
    container.classList.add("d-flex", "flex__center", "jc-space-between", "s-banner--container");
    container.setAttribute("role", "alertdialog");
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("d-flex", "g8");
    if (icon) {
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("flex--item");
        const [name, path] = icon;
        const [svgIcon] = index_1.Icons.makeStacksIcon(name, path, { width: 18 });
        iconContainer.append(svgIcon);
        mainContainer.append(iconContainer);
    }
    const textContainer = document.createElement("div");
    textContainer.classList.add("d-flex", "ai-center");
    const textElement = document.createElement("p");
    textElement.classList.add("m0");
    textElement.append(text);
    textContainer.append(textElement);
    mainContainer.append(textContainer);
    const closeContainer = document.createElement("div");
    closeContainer.classList.add("flex--item", "ml-auto", "myn8");
    const closeButton = document.createElement("a");
    closeButton.classList.add("p8", "s-btn", "d-flex", "flex__center", "fc-dark", "js-notice-close");
    closeButton.setAttribute("role", "status");
    const [svgClose] = index_1.Icons.makeStacksIcon("iconClearSm", "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z", { classes: ["m0"] });
    closeButton.append(svgClose);
    closeContainer.append(closeButton);
    container.append(mainContainer, closeContainer);
    banner.append(container);
    return banner;
};
exports.makeStacksBanner = makeStacksBanner;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksBreadcrumb = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/breadcrumbs/
 *
 * @summary Creates a Stacks breadcrumb
 * @param {BreadcrumbItem[]} items An array of items to display in the breadcrumb
 * @param {StacksCommonOptions} options configuration
 * @returns {HTMLElement}
 */
const makeStacksBreadcrumb = (items, options) => {
    const { classes = [] } = options;
    const nav = document.createElement("nav");
    nav.classList.add("s-breadcrumbs", "mb6", "sm:mb2", ...classes);
    items.forEach((item, index) => {
        const { label, href = "#", } = item;
        const breadcrumbItem = document.createElement("div");
        breadcrumbItem.classList.add("s-breadcrumbs--item");
        const breadcrumbLink = document.createElement("a");
        breadcrumbLink.classList.add("s-breadcrumbs--link");
        breadcrumbLink.href = href;
        if (Array.isArray(label)) {
            // this is an icon
            const [name, path] = label;
            const [icon] = index_1.Icons.makeStacksIcon(name, path, {
                classes: ["mtn2"],
                width: 18
            });
            breadcrumbLink.append(icon);
        }
        else {
            breadcrumbLink.append(label);
        }
        breadcrumbItem.append(breadcrumbLink);
        if (index !== items.length - 1) {
            const [dividerIcon] = index_1.Icons.makeStacksIcon("iconArrowRightAltSm", "m4.38 4.62 1.24-1.24L9.24 7l-3.62 3.62-1.24-1.24L6.76 7 4.38 4.62Z", {
                classes: ["s-breadcrumbs--divider"],
                width: 13,
                height: 14
            });
            breadcrumbItem.append(dividerIcon);
        }
        nav.append(breadcrumbItem);
    });
    return nav;
};
exports.makeStacksBreadcrumb = makeStacksBreadcrumb;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksButtonGroup = void 0;
/**
 * @see https://stackoverflow.design/product/components/button-groups/
 *
 * @summary Creates a Stacks button group
 * @param {GroupButton[]} buttons the buttons to display in the group
 * @param {StacksButtonGroupOptions} [options] configuration
 * @returns {HTMLDivElement}
 */
const makeStacksButtonGroup = (buttons, options = {}) => {
    const { classes = [] } = options;
    const container = document.createElement("div");
    container.classList.add("s-btn-group", ...classes);
    buttons.forEach((buttonConfig) => {
        const { text, selected = false, count, form = false, } = buttonConfig;
        const button = document.createElement("button");
        button.classList.add("s-btn", "s-btn__muted", "s-btn__outlined");
        button.setAttribute("role", "button");
        button.append(text);
        if (selected) {
            button.classList.add("is-selected");
        }
        if (count) {
            const badge = document.createElement("span");
            badge.classList.add("s-btn--badge");
            const btnNumber = document.createElement("span");
            btnNumber.classList.add("s-btn--number");
            btnNumber.textContent = count.toString();
            badge.append(btnNumber);
            button.append(" ", badge);
        }
        if (form) {
            const formContainer = document.createElement("form");
            formContainer.classList.add("s-btn-group--container");
            formContainer.append(button);
            container.append(formContainer);
        }
        else {
            container.append(button);
        }
    });
    return container;
};
exports.makeStacksButtonGroup = makeStacksButtonGroup;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksCheckboxes = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks checkbox
 * @param {Input.StacksInputTypes[]} checkboxes The checkboxes to create
 * @param {Input.StacksRadioCheckboxOptions} [options] checkbox configuration
 * @returns {HTMLElement[]}
 */
const makeStacksCheckboxes = (checkboxes, options) => {
    return index_1.Input.makeStacksRadiosOrCheckboxes(checkboxes, "checkbox", options);
};
exports.makeStacksCheckboxes = makeStacksCheckboxes;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeIndicator = void 0;
/**
 * @see https://stackoverflow.design/product/components/activity-indicator/
 *
 * @summary creates a Stacks activity indicator
 * @param {StacksIndicatorOptions} options configuration
 * @returns {HTMLDivElement}
 */
const makeIndicator = (options = {}) => {
    const { type = "", text = "", hiddenText = "", classes = [] } = options;
    const indicator = document.createElement("div");
    indicator.classList.add("s-activity-indicator", ...classes);
    if (type) {
        indicator.classList.add(`s-activity-indicator__${type}`);
    }
    if (text) {
        indicator.append(text);
    }
    if (hiddenText) {
        const hiddenElement = document.createElement("div");
        hiddenElement.classList.add("v-visible-sr");
        hiddenElement.innerText = hiddenText;
        indicator.append(hiddenElement);
    }
    return indicator;
};
exports.makeIndicator = makeIndicator;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksRadiosOrCheckboxes = exports.makeStacksInput = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/inputs/
 *
 * @summary creates a Stacks input
 * @param {string} id the input id
 * @param {StacksInputOptions} inputOptions input configuration
 * @param {StacksLabelOptions} [labelOptions] label configuration
 * @returns {HTMLDivElement}
 */
const makeStacksInput = (id, inputOptions = {}, labelOptions) => {
    var _a;
    const { value = "", classes = [], placeholder = "", title, isSearch } = inputOptions;
    const inputParent = document.createElement("div");
    inputParent.classList.add("d-flex", "ps-relative");
    const input = document.createElement("input");
    input.classList.add("s-input", ...classes);
    input.type = "text";
    input.id = input.name = id;
    input.placeholder = placeholder;
    input.value = value;
    if (title)
        input.title = title;
    if (isSearch) {
        input.classList.add("s-input__search");
        const [searchIcon] = index_1.Icons.makeStacksIcon("iconSearch", "m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z", {
            classes: ["s-input-icon", "s-input-icon__search"],
            width: 18,
        });
        inputParent.append(searchIcon);
    }
    inputParent.prepend(input);
    if (labelOptions) {
        (_a = (labelOptions.parentClasses || (labelOptions.parentClasses = []))) === null || _a === void 0 ? void 0 : _a.push("flex--item");
        const label = index_1.Label.makeStacksLabel(id, labelOptions);
        const container = document.createElement("div");
        container.classList.add("d-flex", "gs4", "gsy", "fd-column");
        container.append(label, inputParent);
        return container;
    }
    return inputParent;
};
exports.makeStacksInput = makeStacksInput;
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 * @see https://stackoverflow.design/product/components/radio/
 *
 * @summary Creates a Stacks input
 * @param {StacksInputTypes[]} inputs The checkboxes to create
 * @param {StacksRadioCheckboxOptions} [options] checkbox configuration
 * @returns {HTMLElement[]} The checkboxes with or without the wrapper
 */
const makeStacksRadiosOrCheckboxes = (inputs, type, options, withoutFieldset) => {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add(`s-${type}-group`);
    if (options) {
        const { legendText = "", legendDescription = "", horizontal, classes = [], } = options;
        if (horizontal) {
            fieldset.classList.add(`s-${type}-group__horizontal`);
        }
        fieldset.classList.add(...classes);
        const legend = document.createElement("legend");
        legend.classList.add("flex--item", "s-label");
        legend.innerText = legendText;
        if (legendDescription) {
            const span = document.createElement("span");
            span.classList.add("ml4", "fw-normal", "fc-light");
            span.innerText = legendDescription;
            legend.append(" ", span);
        }
        fieldset.append(legend);
    }
    const items = inputs.map((inputType) => makeFormContainer(inputType, type));
    if (withoutFieldset) {
        return items;
    }
    else {
        fieldset.append(...items);
        return [fieldset, ...items];
    }
};
exports.makeStacksRadiosOrCheckboxes = makeStacksRadiosOrCheckboxes;
/**
 * @summary Helper for creating a checkbox/radio container
 * @param {StacksInputTypes} radioCheckbox input configuration
 * @returns {HTMLDivElement}
 */
const makeFormContainer = (radioCheckbox, type) => {
    const { id, labelConfig, selected = false, disabled = false, name } = radioCheckbox;
    const container = document.createElement("div");
    container.classList.add(`s-${type}-control`);
    const input = document.createElement("input");
    input.classList.add(`s-${type}`);
    input.type = type;
    input.id = id;
    input.checked = selected;
    input.disabled = disabled;
    if (name) {
        input.name = name;
    }
    const label = index_1.Label.makeStacksLabel(id, labelConfig);
    container.append(input, label);
    return container;
};


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksLabel = void 0;
/**
 * @see https://stackoverflow.design/product/components/labels/
 *
 * @summary creates a Stacks label
 * @param {string} forId the label htmlFor attribute
 * @param {StacksLabelOptions} labelOptions label configuration
 * @returns {HTMLDivElement | HTMLLabelElement}
 */
const makeStacksLabel = (forId, labelOptions) => {
    const { classes = [], parentClasses = [], text, description, statusText, statusType } = labelOptions;
    const labelParent = document.createElement("div");
    labelParent.classList.add(...parentClasses);
    const label = document.createElement("label");
    label.classList.add("s-label", ...classes);
    label.htmlFor = forId;
    label.innerHTML = text;
    // https://stackoverflow.design/product/components/labels/#status
    if (statusText && statusType) {
        const status = document.createElement("span");
        status.innerHTML = statusText;
        status.classList.add("s-label--status");
        if (statusType !== "optional") {
            status.classList.add(`s-label--status__${statusType}`);
        }
        label.append(" ", status);
    }
    if (description) {
        const p = document.createElement("p");
        p.classList.add("s-description", "mt2");
        p.innerHTML = description;
        // if there's a description, the label
        // must have a d-block class
        label.classList.add("d-block");
        label.append(p);
        labelParent.append(label);
        return labelParent;
    }
    else {
        label.classList.add("flex--item");
        return label;
    }
};
exports.makeStacksLabel = makeStacksLabel;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeLink = void 0;
/**
 * @see https://stackoverflow.design/product/components/links/
 *
 * @summary creates a Stacks link
 * @param {StacksLinksOptions} options configuration
 * @returns {HTMLAnchorElement | HTMLButtonElement}
 */
const makeLink = (options = {}) => {
    const { href = "", isButton = false, type = "", blockLink = null, text, click, classes = [] } = options;
    const anchor = document.createElement(isButton ? "button" : "a");
    anchor.classList.add("s-link", ...classes);
    anchor.innerText = text;
    if (type) {
        anchor.classList.add(`s-link__${type}`);
    }
    if (blockLink) {
        anchor.classList.add("s-block-link");
        anchor.classList.remove("s-link");
        if (blockLink.border) {
            anchor.classList.add(`s-block-link__${blockLink.border}`);
        }
        if (blockLink.selected) {
            anchor.classList.add("is-selected");
        }
        if (blockLink.danger) {
            anchor.classList.add("s-block-link__danger");
        }
    }
    if (href && anchor instanceof HTMLAnchorElement) {
        anchor.href = href;
    }
    if (click) {
        const { handler, options } = click;
        anchor.addEventListener("click", handler, options);
    }
    return anchor;
};
exports.makeLink = makeLink;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeMenu = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/menus/
 *
 * @summary creates a Stacks menu
 * @param {StacksMenuOptions} options configuration
 * @returns {HTMLUListElement}
 */
const makeMenu = (options = {}) => {
    const { itemsType = "a", childrenClasses = [], navItems, classes = [] } = options;
    const menu = document.createElement("ul");
    menu.classList.add("s-menu", ...classes);
    menu.setAttribute("role", "menu");
    // TODO
    // https://stackoverflow.design/product/components/menus/#radio-groups
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
                li.innerText = separatorText;
            menu.append(li);
            return;
        }
        else if ("checkbox" in navItem) {
            const { checkbox, checkboxOptions } = navItem;
            // one checkbox returned, fetch second item of the array
            const [, input] = index_1.Checkbox.makeStacksCheckboxes([checkbox], checkboxOptions);
            li.append(input);
            menu.append(li);
            return;
        }
        (_a = navItem.classes) === null || _a === void 0 ? void 0 : _a.push(...childrenClasses);
        li.setAttribute("role", "menuitem");
        const item = index_1.Links.makeLink(Object.assign({
            isButton: itemsType === "button",
            blockLink: {},
        }, navItem));
        li.append(item);
        menu.append(li);
    });
    return menu;
};
exports.makeMenu = makeMenu;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeNavigation = void 0;
/**
 * @see https://stackoverflow.design/product/components/navigation/
 *
 * @summary creates a Stacks navigation component
 * @param {StacksNavItems[]} navItems the children of the nav element
 * @param {"button" | "a"} type whether in-page navigation is used
 * @param {number} selectIndex the index of the item to select
 * @returns {HTMLElementTagNameMap["nav"]}
 */
const makeNavigation = (navItems, type, selectIndex = 0) => {
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
exports.makeNavigation = makeNavigation;
/**
 * @summary creates a navigation item
 * @param {StacksNavItems} item info about the item to create
 * @param {"button" | "a"} type whether in-page navigation is used
 * @param {boolean} select whether the item should be selected
 * @returns {HTMLLIElement}
 */
const createNavItem = ({ id, text, ariaControls }, type, select) => {
    const li = document.createElement("li");
    const wrapper = document.createElement(type);
    wrapper.id = id;
    wrapper.innerText = text;
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


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksNotice = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/notices/
 *
 * @summary Creates a Stacks notice
 * @param {StacksNoticesOptions} options configuration
 * @returns {HTMLElement}
 */
const makeStacksNotice = (options) => {
    const { type, important = false, icon, text, classes = [], } = options;
    const notice = document.createElement("aside");
    notice.classList.add("s-notice", ...classes);
    notice.setAttribute("role", important ? "alert" : "status");
    if (type) {
        notice.classList.add(`s-notice__${type}`);
    }
    if (important) {
        notice.classList.add("s-notice__important");
    }
    if (icon) {
        notice.classList.add("d-flex");
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("flex--item", "mr8");
        const [name, path] = icon;
        const [svgIcon] = index_1.Icons.makeStacksIcon(name, path, { width: 18 });
        iconContainer.append(svgIcon);
        const textContainer = document.createElement("div");
        textContainer.classList.add("flex--item", "lh-lg");
        textContainer.append(text);
        notice.append(iconContainer, textContainer);
    }
    else {
        const p = document.createElement("p");
        p.classList.add("m0");
        p.append(text);
        notice.append(p);
    }
    return notice;
};
exports.makeStacksNotice = makeStacksNotice;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makePagination = void 0;
/**
 * @see https://stackoverflow.design/product/components/pagination/
 *
 * @summary Creates a Stacks pagination component
 * @param {StacksPaginationOptions} options
 * @returns {HTMLDivElement}
 */
const makePagination = (options) => {
    const { first, middle, last, selectedPage = 1, generator, nextButtonHref = "#", classes = [] } = options;
    const container = document.createElement("div");
    container.classList.add("s-pagination", ...classes);
    const clear = document.createElement("span");
    clear.classList.add("s-pagination--item", "s-pagination--item__clear");
    clear.textContent = "...";
    const nextButton = document.createElement("a");
    nextButton.classList.add("s-pagination--item");
    nextButton.textContent = "Next";
    nextButton.href = nextButtonHref;
    container.append(...first.map((page) => createPage(page, generator(page), page === selectedPage)), clear.cloneNode(true));
    if (middle) {
        container.append(...middle.map((page) => createPage(page, generator(page), page === selectedPage)), clear.cloneNode(true));
    }
    container.append(...last.map((page) => createPage(page, generator(page), page === selectedPage)), nextButton);
    return container;
};
exports.makePagination = makePagination;
/**
 * @summary Creates a page button
 * @param {number} page - The page number
 * @param {string} url - The url for the page
 * @param {boolean} isSelected - Whether the page is selected
 * @returns {HTMLSpanElement | HTMLAnchorElement} The page button
 */
const createPage = (page, url, isSelected) => {
    const element = document.createElement(isSelected ? "span" : "a");
    element.classList.add("s-pagination--item");
    element.textContent = page.toString();
    if (element instanceof HTMLAnchorElement) {
        element.href = url;
    }
    else {
        //    element is not an anchor
        // => element is a span
        // => it should be selected
        element.classList.add("is-selected");
    }
    return element;
};


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeSteppedBar = exports.makeSegmentedBar = exports.makeCircularBar = exports.makeBaseBar = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/progress-bars/#base-style
 *
 * @summary Create a Stacks base progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksBaseBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
const makeBaseBar = (id, options) => {
    const { width, coloring, classes = [], } = options;
    const bar = document.createElement("div");
    bar.classList.add("s-progress--bar");
    bar.style.setProperty("width", `${width.toString()}%`);
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-valuenow", width.toString());
    const progress = document.createElement("div");
    progress.classList.add("s-progress", ...classes);
    progress.id = id;
    if (coloring) {
        progress.classList.add(`s-progress__${coloring}`);
    }
    progress.append(bar);
    return progress;
};
exports.makeBaseBar = makeBaseBar;
/**
 * @see https://stackoverflow.design/product/components/progress-bars/#circular
 *
 * @summary Create a Stacks circular progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksCircularBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
const makeCircularBar = (id, options) => {
    const { width, classes = [], size } = options;
    const progress = document.createElement("div");
    progress.id = id;
    progress.classList.add("s-progress", "s-progress__circular", ...classes);
    progress.style.setProperty("--s-progress-value", `${(width / 100).toString()}`);
    if (size) {
        progress.classList.add(`s-progress__${size}`);
    }
    const bar = document.createElement("svg");
    bar.classList.add("s-progress-bar");
    bar.setAttribute("viewBox", "0 0 32 32");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-valuenow", width.toString());
    const circle = document.createElement("circle");
    circle.setAttribute("cx", "16");
    circle.setAttribute("cy", "16");
    circle.setAttribute("r", "14");
    bar.append(circle, circle.cloneNode(true));
    progress.innerHTML = bar.outerHTML;
    return progress;
};
exports.makeCircularBar = makeCircularBar;
/**
 * @see https://stackoverflow.design/product/components/progress-bars/#segmented
 *
 * @summary Create a Stacks segmented progress bar
 * @param {string} id - The id of the progress bar
 * @param {StacksSegmentedBarOptions} options - configuration
 * @returns {HTMLDivElement}
 */
const makeSegmentedBar = (id, options) => {
    const { width, segments, coloring, classes = [], } = options;
    const progress = document.createElement("div");
    progress.id = id;
    progress.classList.add("s-progress", "s-progress__segmented", ...classes);
    if (coloring) {
        progress.classList.add(`s-progress__${coloring}`);
    }
    const bar = document.createElement("div");
    bar.classList.add("s-progress--bar");
    bar.style.setProperty("width", `${width.toString()}%"`);
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-valuenow", width.toString());
    const ol = document.createElement("ol");
    ol.classList.add("s-progress--segments");
    for (let i = 0; i < segments + 1; i++) {
        const li = document.createElement("li");
        ol.append(li);
    }
    progress.append(bar, ol);
    return progress;
};
exports.makeSegmentedBar = makeSegmentedBar;
/**
 * @see https://stackoverflow.design/product/components/progress-bars/#stepped
 *
 * @summary Create a Stacks stepped progress bar
 * @param {string} id - the id of the progress bar
 * @param {SteppedBarItem[]} items - the items to display
 * @param {StacksCommonOptions} options - configuration
 * @returns {HTMLDivElement}
 */
const makeSteppedBar = (id, items, options = {}) => {
    const { classes = [] } = options;
    const progress = document.createElement("div");
    progress.id = id;
    progress.classList.add("s-progress", "s-progress__stepped", ...classes);
    items.forEach((item, index) => {
        const { status, label, classes = [], href = "#", } = item;
        const step = document.createElement("div");
        step.classList.add("s-progress--step", ...classes);
        if (status) {
            step.classList.add(`is-${status}`);
        }
        const stop = document.createElement("a");
        stop.classList.add("s-progress--stop");
        stop.href = href;
        if (status === "complete") {
            const [checkmark] = index_1.Icons.makeStacksIcon("iconCheckmarkSm", "M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8Z");
            stop.append(checkmark);
        }
        step.append(stop);
        const rightBar = document.createElement("div");
        rightBar.classList.add("s-progress--bar", "s-progress--bar__right");
        const leftBar = document.createElement("div");
        leftBar.classList.add("s-progress--bar", "s-progress--bar__left");
        if (index === 0) { // first item
            step.append(rightBar);
        }
        else if (index === items.length - 1) { // last item
            step.append(leftBar);
        }
        else {
            step.append(rightBar, leftBar);
        }
        const labelEl = document.createElement("a");
        labelEl.classList.add("s-progress--label");
        labelEl.href = href;
        labelEl.textContent = label;
        step.append(labelEl);
        progress.append(step);
    });
    return progress;
};
exports.makeSteppedBar = makeSteppedBar;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksPopover = void 0;
/**
 * @see https://stackoverflow.design/product/components/popovers
 *
 * @summary Creates a Stacks popover
 * @param {string} id The id of the popover
 * @param {HTMLElement} controller The controller element
 * @param {StacksPopoverOptions} options Popover configuration
 */
const makeStacksPopover = (id, controller, options) => {
    const { referenceSelector, toggleClass, placement, toggle, autoShow, hideOnOutsideClick, manualArrowPositioning, callbacks, contentHtml, classes = [], } = options;
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
            const eventName = name;
            const handler = callback;
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
exports.makeStacksPopover = makeStacksPopover;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksRadios = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/checkbox/
 *
 * @summary Creates a Stacks radio
 * @param {Input.StacksInputTypes[]} radios The radios to create
 * @param {Input.StacksRadioCheckboxOptions} [options] radio configuration
 * @returns {HTMLElement[]}
 */
const makeStacksRadios = (radios, groupName, options) => {
    radios.forEach((radio) => {
        radio.name = groupName;
    });
    return index_1.Input.makeStacksRadiosOrCheckboxes(radios, "radio", options);
};
exports.makeStacksRadios = makeStacksRadios;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleValidation = exports.makeStacksSelect = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/select/
 *
 * @summary Creates a Stacks select element
 * @param {string} id The id of the select
 * @param {SelectOption[]} items The options to display in the select
 * @param {Label.StacksLabelOptions} [labelOptions] label configuration
 * @param {StacksSelectOptions} [options] configuration
 * @returns {HTMLDivElement}
 */
const makeStacksSelect = (id, items, labelOptions, options = {}) => {
    const { disabled = false, size, validation, classes = [] } = options;
    const container = document.createElement("div");
    container.classList.add("d-flex", "gs4", "gsy", "fd-column");
    if (labelOptions) {
        (labelOptions.parentClasses || (labelOptions.parentClasses = [])).push("flex--item");
        const label = index_1.Label.makeStacksLabel(id, labelOptions);
        container.append(label);
    }
    const selectContainer = document.createElement("div");
    selectContainer.classList.add("flex--item", "s-select");
    if (size) {
        selectContainer.classList.add(`s-select__${size}`);
    }
    const select = document.createElement("select");
    select.id = id;
    select.classList.add(...classes);
    if (disabled) {
        container.classList.add("is-disabled");
        select.disabled = true;
    }
    items.forEach((item) => {
        const { value, text, selected = false } = item;
        const option = document.createElement("option");
        option.value = value;
        option.text = text;
        option.selected = selected;
        select.append(option);
    });
    selectContainer.append(select);
    container.append(selectContainer);
    if (validation) {
        (0, exports.toggleValidation)(container, validation);
    }
    return container;
};
exports.makeStacksSelect = makeStacksSelect;
/**
 * @see https://stackoverflow.design/product/components/select/#validation-states
 *
 * @summary Toggles validation styling to a select
 * @param {HTMLDivElement} container the select's container
 * @param {StacksSelectOptions["validation"]} [state] configuration
 * @returns {void}
 */
const toggleValidation = (container, state) => {
    var _a, _b;
    container.classList.remove("has-success", "has-warning", "has-error");
    (_a = container.querySelector(".s-input-icon")) === null || _a === void 0 ? void 0 : _a.remove();
    if (!state)
        return;
    container.classList.add(`has-${state}`);
    const [name, path] = index_1.Icons.validationIcons[state];
    const [icon] = index_1.Icons.makeStacksIcon(name, path, {
        classes: ["s-input-icon"],
        width: 18
    });
    (_b = container.querySelector(".s-select")) === null || _b === void 0 ? void 0 : _b.append(icon);
};
exports.toggleValidation = toggleValidation;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeSpinner = void 0;
/**
 * @see https://stackoverflow.design/product/components/spinner/
 *
 * @summary creates a Stacks spinner
 * @param {StacksSpinnerOptions} options configuration
 * @returns {HTMLDivElement}
 */
const makeSpinner = (options = {}) => {
    const { size = "", hiddenText = "", classes = [] } = options;
    const spinner = document.createElement("div");
    spinner.classList.add("s-spinner", ...classes);
    if (size) {
        spinner.classList.add(`s-spinner__${size}`);
    }
    if (hiddenText) {
        const hiddenElement = document.createElement("div");
        hiddenElement.classList.add("v-visible-sr");
        hiddenElement.innerText = hiddenText;
        spinner.append(hiddenElement);
    }
    return spinner;
};
exports.makeSpinner = makeSpinner;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksTag = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/tags/
 *
 * @summary Creates a Stacks tag
 * @param {StacksTagsOptions} options - configuration
 * @returns {AnchorElement}
 */
const makeStacksTag = (options) => {
    const { classes = [], name, href = "#", moderator = false, selected = false, size = "", muted = false, required = false, sponsor = null, dismissable = false, onDismiss = null, watched = false, ignored = false, } = options;
    const tag = document.createElement("a");
    tag.classList.add("s-tag", ...classes);
    tag.href = href;
    tag.textContent = name;
    if (moderator) {
        tag.classList.add("s-tag__moderator");
    }
    if (selected) {
        tag.classList.add("is-selected");
    }
    if (size) {
        tag.classList.add(`s-tag__${size}`);
    }
    if (muted) {
        tag.classList.add("s-tag__muted");
    }
    if (required) {
        tag.classList.add("s-tag__required");
    }
    if (watched) {
        tag.classList.add("s-tag__watched");
    }
    else if (ignored) {
        tag.classList.add("s-tag__ignored");
    }
    if (sponsor) {
        const { imgUrl, width = 18, height = 16, alt = "" } = sponsor;
        const sponsorImg = document.createElement("img");
        sponsorImg.classList.add("s-tag--sponsor");
        sponsorImg.src = imgUrl;
        sponsorImg.width = width;
        sponsorImg.height = height;
        sponsorImg.alt = alt;
        tag.prepend(" ", sponsorImg);
    }
    if (dismissable) {
        const [iconClearSm] = index_1.Icons.makeStacksIcon("iconClearSm", "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z");
        const dismiss = document.createElement("span");
        dismiss.classList.add("s-tag--dismiss");
        dismiss.append(iconClearSm);
        if (onDismiss) {
            dismiss.addEventListener("click", (event) => {
                const span = event.target;
                onDismiss(span === null || span === void 0 ? void 0 : span.closest(".s-tag"), event);
            });
        }
        tag.append(" ", dismiss);
    }
    return tag;
};
exports.makeStacksTag = makeStacksTag;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleValidation = exports.makeStacksTextarea = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/textarea/
 *
 * @summary creates a Stacks textarea
 * @param {string} id the textarea id
 * @param {StacksTextareaOptions} textareaOptions textarea configuration
 * @param {Label.StacksLabelOptions} [labelOptions] label configuration
 * @returns {HTMLDivElement}
 */
const makeStacksTextarea = (id, textareaOptions = {}, labelOptions) => {
    const { value = "", classes = [], placeholder = "", title = "", size, validation, } = textareaOptions;
    const textareaParent = document.createElement("div");
    textareaParent.classList.add("d-flex", "fd-column", "gs4", "gsy", ...classes);
    if (labelOptions) {
        const label = index_1.Label.makeStacksLabel(id, labelOptions);
        textareaParent.append(label);
    }
    const textarea = document.createElement("textarea");
    textarea.classList.add("flex--item", "s-textarea");
    textarea.id = id;
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.title = title;
    if (size) {
        textarea.classList.add(`s-textarea__${size}`);
    }
    textareaParent.append(textarea);
    if (validation) {
        (0, exports.toggleValidation)(textareaParent, validation);
    }
    return textareaParent;
};
exports.makeStacksTextarea = makeStacksTextarea;
/**
 * @see https://stackoverflow.design/product/components/textarea/#validation-states
 *
 * @summary Toggles validation styling to a textarea
 * @param {HTMLDivElement} textareaParent the textarea's container
 * @param {StacksTextareaOptions["validation"]} validation configuration
 * @returns {void}
 */
const toggleValidation = (textareaParent, validation) => {
    var _a, _b;
    textareaParent.classList.remove("has-success", "has-warning", "has-error");
    const oldTextarea = textareaParent.querySelector(".s-textarea");
    if (!validation) {
        // toggle off all styles
        (_a = textareaParent.querySelector(".s-input-icon")) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = textareaParent.querySelector(".s-input-message")) === null || _b === void 0 ? void 0 : _b.remove();
        const validationContainer = oldTextarea.parentElement;
        validationContainer === null || validationContainer === void 0 ? void 0 : validationContainer.replaceWith(oldTextarea);
        return;
    }
    const { state, description } = validation;
    textareaParent.classList.add(`has-${state}`);
    const [iconName, iconPath] = index_1.Icons.validationIcons[state];
    const [icon] = index_1.Icons.makeStacksIcon(iconName, iconPath, {
        classes: ["s-input-icon"],
        width: 18,
    });
    // switch validation
    if (oldTextarea.nextElementSibling) {
        oldTextarea.nextElementSibling.replaceWith(icon);
        const inputMessage = textareaParent.querySelector(".s-input-message");
        if (description) {
            if (inputMessage) {
                inputMessage.innerHTML = description;
            }
            else {
                createAndAppendDescription(description, textareaParent);
            }
        }
        else if (!description && inputMessage) {
            inputMessage.remove();
        }
    }
    else {
        // create validation
        const validationContainer = document.createElement("div");
        validationContainer.classList.add("d-flex", "ps-relative");
        validationContainer.append(oldTextarea, icon);
        textareaParent.append(validationContainer);
        if (description) {
            createAndAppendDescription(description, textareaParent);
        }
    }
};
exports.toggleValidation = toggleValidation;
const createAndAppendDescription = (description, appendTo) => {
    const message = document.createElement("p");
    message.classList.add("flex--item", "s-input-message");
    message.innerHTML = description;
    appendTo.append(message);
};


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksToggle = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/toggle-switch/
 *
 * @summary Creates a Stacks toggle switch
 * @param {string} id the switch id
 * @param {StacksToggleOptions} labelOptions attached label configuration
 * @param {boolean} on the state of the switch
 * @param {string[]} classes the classes to apply to the container of the switch
 * @returns {HTMLDivElement}
 */
const makeStacksToggle = (id, labelOptions, on = false, ...classes) => {
    const container = document.createElement("div");
    container.classList.add("d-flex", "gs8", "ai-center", ...classes);
    const label = index_1.Label.makeStacksLabel(id, labelOptions);
    const toggleParent = document.createElement("div");
    toggleParent.classList.add("flex--item", "s-toggle-switch");
    const toggle = document.createElement("input");
    toggle.id = id;
    toggle.type = "checkbox";
    toggle.checked = on;
    const toggleSwitchDiv = document.createElement("div");
    toggleSwitchDiv.classList.add("s-toggle-switch--indicator");
    toggleParent.append(toggle, toggleSwitchDiv);
    container.append(label, toggleParent);
    return container;
};
exports.makeStacksToggle = makeStacksToggle;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeMinimalUserCard = exports.makeSmallUserCard = exports.makeBaseUserCard = exports.makeFullUserCard = void 0;
const _1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/user-cards/#full
 *
 * @summary Creates a Stacks full user card
 * @param {FullUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
const makeFullUserCard = (options) => {
    const { avatar, user: { name = "", href = "#", reputation = "1", badges, labels, role, location, tags }, userType, classes = [], } = options;
    const userCard = document.createElement("div");
    userCard.classList.add("s-user-card", "s-user-card__full", ...classes);
    const avatarContainer = getDefaultUserCardAvatar(avatar, href, 48);
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("s-user-card--info");
    const link = document.createElement("a");
    link.classList.add("s-user-card--link", "d-flex", "g4");
    link.href = href;
    const username = document.createElement("div");
    username.classList.add("flex--item");
    username.innerHTML = name;
    link.append(username);
    if (labels) {
        const elements = getLabelElements(labels);
        link.append(...elements);
    }
    const awards = getUserAwards(reputation, badges);
    infoContainer.append(link, awards);
    if (role) {
        const roleEl = document.createElement("div");
        roleEl.classList.add("s-user-card--role");
        roleEl.innerHTML = role;
        infoContainer.append(roleEl);
    }
    if (location) {
        const locationEl = document.createElement("div");
        locationEl.classList.add("s-user-card--location");
        locationEl.innerHTML = location;
        infoContainer.append(locationEl);
    }
    if (tags) {
        const userTags = document.createElement("div");
        userTags.classList.add("s-user-card--tags", "d-flex", "g4");
        const tagsEls = tags.map((config) => {
            var _a;
            (_a = config.classes) === null || _a === void 0 ? void 0 : _a.push("flex--item");
            if (!(config === null || config === void 0 ? void 0 : config.size)) {
                // default tag size for full cards
                config.size = "xs";
            }
            return _1.Tag.makeStacksTag(config);
        });
        userTags.append(...tagsEls);
        infoContainer.append(userTags);
    }
    userCard.append(avatarContainer, infoContainer);
    if (userType) {
        const userTypeEl = document.createElement("div");
        userTypeEl.classList.add("s-user-card--type");
        userTypeEl.innerHTML = userType;
        userCard.append(userTypeEl);
    }
    return userCard;
};
exports.makeFullUserCard = makeFullUserCard;
/**
 * @see https://stackoverflow.design/product/components/user-cards/#base
 *
 * @summary Creates a Stacks base user card
 * @param {BaseUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
const makeBaseUserCard = (options) => {
    const { avatar, time = "", user: { name = "", href = "#", reputation = "1", badges, labels, }, deleted, highlight, userType, classes = [], } = options;
    const userCard = document.createElement("div");
    userCard.classList.add("s-user-card", ...classes);
    if (highlight) {
        userCard.classList.add("s-user-card__highlighted");
    }
    const timeEl = document.createElement("time");
    timeEl.classList.add("s-user-card--time");
    timeEl.innerHTML = time;
    const avatarContainer = getDefaultUserCardAvatar(avatar, href, 32, deleted);
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("s-user-card--info");
    const link = document.createElement(deleted ? "div" : "a");
    link.classList.add("s-user-card--link", "d-flex", "g4");
    if (labels) {
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("flex--item");
        nameDiv.innerHTML = name;
        link.append(nameDiv, ...getLabelElements(labels));
    }
    else {
        link.innerHTML = name;
    }
    infoContainer.append(link);
    userCard.append(timeEl, avatarContainer, infoContainer);
    // (if one is true, both are guaranteed to be true,
    //  doing this to shut up the TS compiler)
    if (deleted || link instanceof HTMLDivElement) {
        userCard.classList.add("s-user-card__deleted");
        // no more info for deleted users
        return userCard;
    }
    link.href = href;
    const awards = getUserAwards(reputation, badges);
    infoContainer.append(awards);
    if (userType) {
        const userTypeEl = document.createElement("div");
        userTypeEl.classList.add("s-user-card--type");
        userTypeEl.innerText = userType;
        userCard.append(userTypeEl);
    }
    return userCard;
};
exports.makeBaseUserCard = makeBaseUserCard;
/**
 * @see https://stackoverflow.design/product/components/user-cards/#small
 *
 * @summary Creates a Stacks small user card
 * @param {SmallUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
const makeSmallUserCard = (options) => {
    const { avatar, user: { badges, href = "#", reputation = "1", }, classes = [], } = options;
    const userCard = document.createElement("div");
    userCard.classList.add("s-user-card", "s-user-card__small", ...classes);
    const avatarContainer = getDefaultUserCardAvatar(avatar, href, 24);
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("s-user-card--info");
    const awards = getUserAwards(reputation, badges);
    infoContainer.append(awards);
    userCard.append(avatarContainer, infoContainer);
    return userCard;
};
exports.makeSmallUserCard = makeSmallUserCard;
/**
 * @see https://stackoverflow.design/product/components/user-cards/#minimal
 *
 * @summary Creates a Stacks minimal user card
 * @param {MinimalUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
const makeMinimalUserCard = (options) => {
    const { avatar, time = "", user: { name = "", href = "#", reputation = "1", }, deleted, classes = [], } = options;
    const userCard = document.createElement("div");
    userCard.classList.add("s-user-card", "s-user-card__minimal", ...classes);
    if (deleted) {
        userCard.classList.add("s-user-card__deleted");
    }
    if (avatar) {
        const avatarContainer = getDefaultUserCardAvatar(avatar, href, "", deleted);
        userCard.prepend(avatarContainer);
    }
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("s-user-card--info");
    const link = document.createElement(deleted ? "div" : "a");
    link.classList.add("s-user-card--link");
    link.innerHTML = name;
    if (link instanceof HTMLAnchorElement) {
        link.href = href;
    }
    const awards = getUserAwards(reputation);
    infoContainer.append(link, !deleted ? awards : "");
    const timeEl = document.createElement("time");
    timeEl.classList.add("s-user-card--time");
    timeEl.innerText = time;
    userCard.append(infoContainer, timeEl);
    return userCard;
};
exports.makeMinimalUserCard = makeMinimalUserCard;
/**
 * @summary Helper for getting the user awards `<li>`
 * @param {string} reputation The user's reputation
 * @param {AllUserCardOptions["user"]["badge"]} badges The user's badges
 * @returns {HTMLUListElement}
 */
const getUserAwards = (reputation, badges) => {
    const awards = document.createElement("ul");
    awards.classList.add("s-user-card--awards");
    const repContainer = document.createElement("li");
    repContainer.classList.add("s-user-card--rep");
    repContainer.innerHTML = reputation;
    awards.append(repContainer);
    if (badges) {
        const badgesEls = Object
            .entries(badges)
            .map(([color, count]) => {
            const badgeColor = color;
            return _1.Badges.makeBling("li", badgeColor, count.toString());
        });
        awards.append(...badgesEls);
    }
    return awards;
};
/**
 * @summary Helper for getting the user staff/admin/mod badges
 * @param {Required<AllUserCardOptions["user"]>["labels"]} labels badges configuration
 * @returns {HTMLSpanElement[]}
 */
const getLabelElements = (labels) => {
    return labels.map((config) => {
        var _a;
        (_a = config.classes) === null || _a === void 0 ? void 0 : _a.push("flex--item");
        if (!config.size) {
            // default badge size for full cards
            config.size = "xs";
        }
        return _1.Badges.makeStacksBadge(config);
    });
};
/**
 * @summary Helper for getting the default user avatar
 * @param {AllUserCardOptions["avatar"]} avatar avatar configuration
 * @param {string} defaultHref The default href to apply
 * @param {number} defaultSize The default size of the avatar
 * @param {boolean} deleted Whether the user is a deleted user
 * @returns {HTMLDivElement}
 */
const getDefaultUserCardAvatar = (config, defaultHref, defaultSize, deleted) => {
    var _a;
    (_a = config === null || config === void 0 ? void 0 : config.classes) === null || _a === void 0 ? void 0 : _a.push("s-user-card--avatar");
    if (config && !config.size && defaultSize) {
        // default size for base cards
        config.size = defaultSize;
    }
    if (config && !config.href) {
        config.href = defaultHref;
    }
    return _1.Avatar.makeAvatar(config, deleted ? "div" : "a");
};


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksButton = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/buttons/
 *
 * @summary creates a stacks button
 * @param {string} id id of the button
 * @param {string} text text of the button
 * @param {StacksIconButtonOptions} [options] configuration
 * @returns {HTMLButtonElement}
 */
const makeStacksButton = (id, text, options = {}) => {
    const { title, type = [], primary = false, loading = false, selected = false, disabled = false, badge, size, iconConfig, click, classes = [], } = options;
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = text;
    btn.classList.add("s-btn", ...type.map((name) => `s-btn__${name}`), ...classes);
    btn.type = "button";
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-label", title || text);
    if (primary) {
        btn.classList.add("s-btn__primary");
    }
    if (loading) {
        btn.classList.add("is-loading");
    }
    if (title) {
        btn.title = title;
    }
    if (selected) {
        btn.classList.add("is-selected");
    }
    if (disabled) {
        btn.disabled = true;
    }
    if (badge) {
        const badgeEl = document.createElement("span");
        badgeEl.classList.add("s-btn--badge");
        const badgeNumber = document.createElement("span");
        badgeNumber.classList.add("s-btn--number");
        badgeNumber.textContent = badge.toString();
        badgeEl.append(badgeNumber);
        btn.append(" ", badgeEl);
    }
    if (size) {
        btn.classList.add(`s-btn__${size}`);
    }
    if (iconConfig) {
        btn.classList.add("s-btn__icon");
        const { name, path, width, height } = iconConfig;
        const [icon] = index_1.Icons.makeStacksIcon(name, path, { width, height });
        btn.prepend(icon, " ");
    }
    if (click) {
        const { handler, options } = click;
        btn.addEventListener("click", handler, options);
    }
    return btn;
};
exports.makeStacksButton = makeStacksButton;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksIcon = exports.validationIcons = void 0;
exports.validationIcons = {
    warning: [
        "iconAlert",
        "M7.95 2.71c.58-.94 1.52-.94 2.1 0l7.69 12.58c.58.94.15 1.71-.96 1.71H1.22C.1 17-.32 16.23.26 15.29L7.95 2.71ZM8 6v5h2V6H8Zm0 7v2h2v-2H8Z"
    ],
    error: [
        "iconAlertCircle",
        "M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"
    ],
    success: [
        "iconCheckmark",
        "M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5 10-10Z"
    ]
};
/**
 * @see https://stackoverflow.design/product/resources/icons/
 *
 * @summary makes Stacks icon
 * @param {string} name the name of the icon
 * @param {string} pathConfig the SVG's `path` attribute
 */
const makeStacksIcon = (name, pathConfig, { classes = [], width = 14, height = width } = {}) => {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.classList.add("svg-icon", name, ...classes);
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", pathConfig);
    svg.append(path);
    return [svg, path];
};
exports.makeStacksIcon = makeStacksIcon;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeStacksModal = void 0;
const index_1 = __webpack_require__(0);
/**
 * @see https://stackoverflow.design/product/components/modals/
 *
 * @summary creates a Stacks modal
 * @param {string} id the id of the modal
 * @param {StacksModalOptions} options configuration
 * @returns {HTMLElement}
 */
const makeStacksModal = (id, options) => {
    const { classes = [], danger = false, fullscreen = false, celebratory = false, title: { text, id: titleId, classes: titleClasses = [] }, body: { bodyHtml, id: bodyId, classes: bodyClasses = [] }, footer: { buttons, classes: footerClasses = [] }, } = options;
    const modal = document.createElement("aside");
    modal.id = id;
    modal.classList.add("s-modal", ...classes);
    modal.setAttribute("role", "dialog");
    modal.setAttribute("data-controller", "s-modal");
    modal.setAttribute("data-s-modal-target", "modal");
    if (danger) {
        modal.classList.add("s-modal__danger");
    }
    if (celebratory) {
        modal.classList.add("s-modal__celebration");
    }
    const dialog = document.createElement("div");
    dialog.classList.add("s-modal--dialog");
    dialog.setAttribute("role", "document");
    if (fullscreen) {
        dialog.classList.add("s-modal__full");
    }
    const header = document.createElement("h1");
    header.classList.add("s-modal--header", ...titleClasses);
    header.append(text);
    if (titleId) {
        header.id = titleId;
        modal.setAttribute("aria-labelledby", titleId);
    }
    const body = document.createElement("p");
    body.classList.add("s-modal--body", ...bodyClasses);
    body.append(bodyHtml);
    if (bodyId) {
        body.id = bodyId;
        modal.setAttribute("aria-describedby", bodyId);
    }
    const footer = document.createElement("div");
    footer.classList.add("d-flex", "gs8", "gsx", "s-modal--footer", ...footerClasses);
    buttons.forEach((button) => {
        const { element, hideOnClick } = button;
        element.classList.add("flex--item");
        if (hideOnClick) {
            element.setAttribute("data-action", "s-modal#hide");
        }
        footer.append(element);
    });
    const [iconClear] = index_1.Icons.makeStacksIcon("iconClear", "M15 4.41 13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41Z", { width: 18 });
    const close = document.createElement("button");
    close.classList.add("s-modal--close", "s-btn", "s-btn__muted");
    close.setAttribute("type", "button");
    close.setAttribute("aria-label", "Close");
    close.setAttribute("data-action", "s-modal#hide");
    close.append(iconClear);
    dialog.append(header, body, footer, close);
    modal.append(dialog);
    return modal;
};
exports.makeStacksModal = makeStacksModal;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showToast = exports.hideToast = exports.toggleToast = exports.makeStacksToast = void 0;
const index_1 = __webpack_require__(25);
/**
 * @see https://stackoverflow.design/product/components/notices/
 *
 * @summary builder for Stacks notifications
 * @param {string} id the toast id
 * @param {string} text the message text
 */
const makeStacksToast = (id, text, { buttons = [], classes = [], msgClasses = [], type = "none", important = false, } = {}) => {
    const wrap = document.createElement("div");
    wrap.classList.add("s-toast", ...classes);
    wrap.setAttribute("aria-hidden", "true");
    wrap.setAttribute("role", "alertdialog");
    wrap.setAttribute("aria-labelledby", "notice-message");
    wrap.id = id;
    const aside = document.createElement("aside");
    aside.classList.add("s-notice", "p8", "pl16");
    if (type !== "none")
        aside.classList.add(`s-notice__${type}`);
    if (important)
        aside.classList.add("s-notice__important");
    const msgWrap = document.createElement("div");
    msgWrap.classList.add("d-flex", "gs16", "gsx", "ai-center", "jc-space-between", ...msgClasses);
    const message = document.createElement("div");
    message.classList.add("flex--item");
    message.textContent = text;
    const btnWrap = document.createElement("div");
    btnWrap.classList.add("d-flex");
    const dismissBtn = document.createElement("button");
    dismissBtn.type = "button";
    dismissBtn.classList.add("s-btn", "s-notice--btn");
    dismissBtn.setAttribute("aria-label", "Dismiss");
    buttons.push(dismissBtn);
    const [dismissIcon] = (0, index_1.makeStacksIcon)("iconClearSm", "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41z");
    dismissBtn.append(dismissIcon);
    btnWrap.append(...buttons);
    msgWrap.append(message, btnWrap);
    aside.append(msgWrap);
    wrap.append(aside);
    return wrap;
};
exports.makeStacksToast = makeStacksToast;
/**
 * @summary toggles the Stacks toast visibility
 */
const toggleToast = (target, show) => {
    const toast = typeof target === "string" ? document.querySelector(target) : target;
    if (!toast)
        throw new ReferenceError(`missing toast: ${target}`);
    const isShown = (toast === null || toast === void 0 ? void 0 : toast.getAttribute("aria-hidden")) !== "true";
    toast.setAttribute("aria-hidden", (show !== void 0 ? !show : isShown).toString());
    return toast;
};
exports.toggleToast = toggleToast;
/**
 * @summary hides the Stacks toast
 */
const hideToast = (target, hideFor) => {
    const toast = (0, exports.toggleToast)(target, false);
    if (hideFor)
        setTimeout(() => (0, exports.showToast)(toast), hideFor * 1e3);
};
exports.hideToast = hideToast;
/**
 * @summary shows the Stacks toast
 */
const showToast = (target, showFor) => {
    const toast = (0, exports.toggleToast)(target, true);
    if (showFor)
        setTimeout(() => (0, exports.hideToast)(toast), showFor * 1e3);
};
exports.showToast = showToast;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	StacksHelpers = __webpack_exports__;
/******/ 	
/******/ })()
;