"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/avatar.ts
  var avatar_exports = {};
  __export(avatar_exports, {
    makeAvatar: () => makeAvatar
  });
  var makeAvatar = (options = {}, elementType = "a") => {
    const {
      size = "",
      href = "",
      src,
      classes = []
    } = options;
    const avatar = document.createElement(elementType);
    avatar.classList.add("s-avatar", ...classes);
    if (size) {
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

  // src/badges.ts
  var badges_exports = {};
  __export(badges_exports, {
    makeBling: () => makeBling,
    makeStacksBadge: () => makeStacksBadge
  });
  var makeStacksBadge = (options) => {
    const {
      classes = [],
      blingColor = "",
      type = "",
      size = "",
      text,
      icon
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
  var makeBling = (elementType, color, count) => {
    const element = document.createElement(elementType);
    element.classList.add("s-award-bling", `s-award-bling__${color}`);
    element.textContent = count;
    return element;
  };

  // src/banners.ts
  var banners_exports = {};
  __export(banners_exports, {
    makeStacksBanner: () => makeStacksBanner
  });
  var makeStacksBanner = (options) => {
    const {
      style,
      text,
      important = false,
      pinned = false,
      icon,
      classes = []
    } = options;
    const banner = document.createElement("aside");
    banner.classList.add("s-banner", "js-notice-banner", ...classes);
    banner.setAttribute("role", "alert");
    if (style) {
      banner.classList.add(`s-banner__${style}`);
    }
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
      const [svgIcon] = icons_exports.makeStacksIcon(name, path, { width: 18 });
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
    const [svgClose] = icons_exports.makeStacksIcon(
      "iconClearSm",
      "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z",
      { classes: ["m0"] }
    );
    closeButton.append(svgClose);
    closeContainer.append(closeButton);
    container.append(mainContainer, closeContainer);
    banner.append(container);
    return banner;
  };

  // src/breadcrumb.ts
  var breadcrumb_exports = {};
  __export(breadcrumb_exports, {
    makeStacksBreadcrumb: () => makeStacksBreadcrumb
  });
  var makeStacksBreadcrumb = (items, options) => {
    const { classes = [] } = options || {};
    const nav = document.createElement("nav");
    nav.classList.add("s-breadcrumbs", "mb6", "sm:mb2", ...classes);
    items.forEach((item, index) => {
      const {
        label,
        href = "#"
      } = item;
      const breadcrumbItem = document.createElement("div");
      breadcrumbItem.classList.add("s-breadcrumbs--item");
      const breadcrumbLink = document.createElement("a");
      breadcrumbLink.classList.add("s-breadcrumbs--link");
      breadcrumbLink.href = href;
      if (Array.isArray(label)) {
        const [name, path] = label;
        const [icon] = icons_exports.makeStacksIcon(name, path, {
          classes: ["mtn2"],
          width: 18
        });
        breadcrumbLink.append(icon);
      } else {
        breadcrumbLink.append(label);
      }
      breadcrumbItem.append(breadcrumbLink);
      if (index !== items.length - 1) {
        const [dividerIcon] = icons_exports.makeStacksIcon(
          "iconArrowRightAltSm",
          "m4.38 4.62 1.24-1.24L9.24 7l-3.62 3.62-1.24-1.24L6.76 7 4.38 4.62Z",
          {
            classes: ["s-breadcrumbs--divider"],
            width: 13,
            height: 14
          }
        );
        breadcrumbItem.append(dividerIcon);
      }
      nav.append(breadcrumbItem);
    });
    return nav;
  };

  // src/button-groups.ts
  var button_groups_exports = {};
  __export(button_groups_exports, {
    makeStacksButtonGroup: () => makeStacksButtonGroup
  });
  var makeStacksButtonGroup = (buttons, options = {}) => {
    const { classes = [] } = options;
    const container = document.createElement("div");
    container.classList.add("s-btn-group", ...classes);
    buttons.forEach((buttonConfig) => {
      const {
        text,
        selected = false,
        count,
        form = false,
        types = []
      } = buttonConfig;
      const button = buttons_exports.makeStacksButton(
        "",
        text,
        { type: ["muted", "outlined", ...types] }
      );
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
        formContainer.append(button);
        container.append(formContainer);
      } else {
        container.append(button);
      }
    });
    return container;
  };

  // src/checkbox.ts
  var checkbox_exports = {};
  __export(checkbox_exports, {
    makeStacksCheckboxes: () => makeStacksCheckboxes
  });
  var makeStacksCheckboxes = (checkboxes, options) => {
    return input_exports.makeStacksRadiosOrCheckboxes(checkboxes, "checkbox", options);
  };

  // src/indicator.ts
  var indicator_exports = {};
  __export(indicator_exports, {
    makeIndicator: () => makeIndicator
  });
  var makeIndicator = (options = {}) => {
    const {
      type = "",
      text = "",
      hiddenText = "",
      classes = [],
      iconConfig
    } = options;
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
      hiddenElement.textContent = hiddenText;
      indicator.append(hiddenElement);
    }
    if (iconConfig) {
      const { name, path, width, height } = iconConfig;
      const [icon] = icons_exports.makeStacksIcon(name, path, { width, height });
      const div = document.createElement("div");
      div.classList.add("ps-relative");
      indicator.classList.add("ps-absolute", "tn4", "rn4");
      div.append(icon, indicator);
      return div;
    }
    return indicator;
  };

  // src/input.ts
  var input_exports = {};
  __export(input_exports, {
    makeStacksInput: () => makeStacksInput,
    makeStacksRadiosOrCheckboxes: () => makeStacksRadiosOrCheckboxes
  });
  var makeStacksInput = (id, inputOptions = {}, labelOptions) => {
    const {
      value = "",
      classes = [],
      placeholder = "",
      title,
      isSearch
    } = inputOptions;
    const inputParent = document.createElement("div");
    inputParent.classList.add("d-flex", "ps-relative");
    const input = document.createElement("input");
    input.classList.add("s-input", ...classes);
    input.type = "text";
    input.id = input.name = id;
    input.placeholder = placeholder;
    input.value = value;
    if (title) input.title = title;
    if (isSearch) {
      input.classList.add("s-input__search");
      const [searchIcon] = icons_exports.makeStacksIcon(
        "iconSearch",
        "m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z",
        {
          classes: ["s-input-icon", "s-input-icon__search"],
          width: 18
        }
      );
      inputParent.append(searchIcon);
    }
    inputParent.prepend(input);
    if (labelOptions) {
      (labelOptions.parentClasses ||= [])?.push("flex--item");
      const label = label_exports.makeStacksLabel(id, labelOptions);
      const container = document.createElement("div");
      container.classList.add("d-flex", "gy4", "fd-column");
      container.append(label, inputParent);
      return container;
    }
    return inputParent;
  };
  var makeStacksRadiosOrCheckboxes = (inputs, type, options, withoutFieldset) => {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("s-check-group");
    if (options) {
      const {
        legendText = "",
        legendDescription = "",
        horizontal,
        classes = []
      } = options;
      if (horizontal) {
        fieldset.classList.add("s-check-group__horizontal");
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
    } else {
      fieldset.append(...items);
      return [fieldset, ...items];
    }
  };
  var makeFormContainer = (radioCheckbox, type) => {
    const {
      id,
      labelConfig,
      selected = false,
      disabled = false,
      name
    } = radioCheckbox;
    const container = document.createElement("div");
    container.classList.add("s-check-control");
    const input = document.createElement("input");
    input.classList.add(`s-${type}`);
    input.type = type;
    input.id = id;
    input.checked = selected;
    input.disabled = disabled;
    if (name) {
      input.name = name;
    }
    const label = label_exports.makeStacksLabel(id, labelConfig);
    container.append(input, label);
    return container;
  };

  // src/label.ts
  var label_exports = {};
  __export(label_exports, {
    makeStacksLabel: () => makeStacksLabel
  });
  var makeStacksLabel = (forId, labelOptions) => {
    const {
      classes = [],
      parentClasses = [],
      text,
      description,
      statusText,
      statusType
    } = labelOptions;
    const labelParent = document.createElement("div");
    labelParent.classList.add(...parentClasses);
    const label = document.createElement("label");
    label.classList.add("s-label", ...classes);
    label.htmlFor = forId;
    label.innerHTML = text;
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
      label.classList.add("d-block");
      label.append(p);
      labelParent.append(label);
      return labelParent;
    } else {
      label.classList.add("flex--item");
      return label;
    }
  };

  // src/links.ts
  var links_exports = {};
  __export(links_exports, {
    makeLink: () => makeLink
  });
  var makeLink = (options = {}) => {
    const {
      href = "",
      isButton = false,
      type = "",
      blockLink = null,
      text,
      click,
      classes = []
    } = options;
    const anchor = document.createElement(isButton ? "button" : "a");
    anchor.classList.add("s-link", ...classes);
    anchor.textContent = text;
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
      const { handler, options: options2 } = click;
      anchor.addEventListener("click", handler, options2);
    }
    return anchor;
  };

  // src/menus.ts
  var menus_exports = {};
  __export(menus_exports, {
    makeMenu: () => makeMenu
  });
  var makeMenu = (options = {}) => {
    const {
      itemsType = "a",
      childrenClasses = [],
      navItems,
      classes = []
    } = options;
    const menu = document.createElement("ul");
    menu.classList.add("s-menu", ...classes);
    menu.setAttribute("role", "menu");
    navItems.forEach((navItem) => {
      const li = document.createElement("li");
      if ("popover" in navItem && navItem.popover) {
        const {
          position = "auto",
          html
        } = navItem.popover;
        Stacks.setTooltipHtml(li, html, {
          placement: position
        });
      }
      if ("separatorType" in navItem) {
        const {
          separatorType,
          separatorText
        } = navItem;
        li.setAttribute("role", "separator");
        li.classList.add(`s-menu--${separatorType}`);
        if (separatorText) li.textContent = separatorText;
        menu.append(li);
        return;
      } else if ("checkbox" in navItem) {
        const {
          checkbox,
          checkboxOptions
        } = navItem;
        const [, input] = checkbox_exports.makeStacksCheckboxes(
          [checkbox],
          checkboxOptions
        );
        li.append(input);
        menu.append(li);
        return;
      }
      navItem.classes?.push(...childrenClasses);
      li.setAttribute("role", "menuitem");
      const item = links_exports.makeLink(
        Object.assign({
          isButton: itemsType === "button" || navItem.isButton,
          blockLink: {}
        }, navItem)
      );
      li.append(item);
      menu.append(li);
    });
    return menu;
  };

  // src/navigation.ts
  var navigation_exports = {};
  __export(navigation_exports, {
    createNavItem: () => createNavItem,
    makeNavigation: () => makeNavigation
  });
  var makeNavigation = (options = {}) => {
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
    const children = navItems.map((item, i) => {
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
  var createNavItem = ({
    id,
    text,
    ariaControls,
    dropdown,
    href = "#",
    classes = []
  }, type, select) => {
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

  // src/notices.ts
  var notices_exports = {};
  __export(notices_exports, {
    makeStacksNotice: () => makeStacksNotice
  });
  var makeStacksNotice = (options) => {
    const {
      type,
      important = false,
      icon,
      text,
      classes = []
    } = options;
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
      const [svgIcon] = icons_exports.makeStacksIcon(name, path, { width: 18 });
      iconContainer.append(svgIcon);
      const textContainer = document.createElement("div");
      textContainer.classList.add("flex--item", "lh-lg");
      textContainer.append(text);
      notice.append(iconContainer, textContainer);
    } else {
      const p = document.createElement("p");
      p.classList.add("m0");
      p.append(text);
      notice.append(p);
    }
    return notice;
  };

  // src/pagination.ts
  var pagination_exports = {};
  __export(pagination_exports, {
    createPage: () => createPage,
    makePagination: () => makePagination
  });
  var makePagination = (options) => {
    const {
      first,
      middle,
      last,
      selectedPage = 1,
      generator,
      nextButtonHref = "#",
      classes = []
    } = options;
    const container = document.createElement("div");
    container.classList.add("s-pagination", ...classes);
    const clear = document.createElement("span");
    clear.classList.add("s-pagination--item", "s-pagination--item__clear");
    clear.textContent = "...";
    const nextButton = document.createElement("a");
    nextButton.classList.add("s-pagination--item");
    nextButton.textContent = "Next";
    nextButton.href = nextButtonHref;
    container.append(
      ...first.map((page) => createPage(page, generator(page), page === selectedPage)),
      clear.cloneNode(true)
    );
    if (middle) {
      container.append(
        ...middle.map((page) => createPage(page, generator(page), page === selectedPage)),
        clear.cloneNode(true)
      );
    }
    container.append(
      ...last.map((page) => createPage(page, generator(page), page === selectedPage)),
      nextButton
    );
    return container;
  };
  var createPage = (page, url, isSelected) => {
    const element = document.createElement(isSelected ? "span" : "a");
    element.classList.add("s-pagination--item");
    const span = document.createElement("span");
    span.classList.add("v-visible-sr");
    span.textContent = "page";
    element.append(span, page.toString());
    if (element instanceof HTMLAnchorElement) {
      element.href = url;
    } else {
      element.classList.add("is-selected");
      element.ariaCurrent = "page";
    }
    return element;
  };

  // src/progress.ts
  var progress_exports = {};
  __export(progress_exports, {
    makeBaseBar: () => makeBaseBar,
    makeCircularBar: () => makeCircularBar,
    makeSteppedBar: () => makeSteppedBar
  });
  var makeBaseBar = (id, options) => {
    const {
      width,
      coloring,
      classes = []
    } = options;
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
  var makeCircularBar = (id, options) => {
    const {
      width,
      classes = [],
      size
    } = options;
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
  var makeSteppedBar = (id, items, options = {}) => {
    const { classes = [] } = options;
    const progress = document.createElement("div");
    progress.id = id;
    progress.classList.add("s-progress", "s-progress__stepped", ...classes);
    items.forEach((item, index) => {
      const {
        status,
        label,
        classes: classes2 = [],
        href = "#"
      } = item;
      const step = document.createElement("div");
      step.classList.add("s-progress--step", ...classes2);
      if (status) {
        step.classList.add(`is-${status}`);
      }
      const stop = document.createElement("a");
      stop.classList.add("s-progress--stop");
      stop.href = href;
      if (status === "complete") {
        const [checkmark] = icons_exports.makeStacksIcon(
          "iconCheckmarkSm",
          "M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8Z"
        );
        stop.append(checkmark);
      }
      step.append(stop);
      const rightBar = document.createElement("div");
      rightBar.classList.add("s-progress--bar", "s-progress--bar__right");
      const leftBar = document.createElement("div");
      leftBar.classList.add("s-progress--bar", "s-progress--bar__left");
      if (index === 0) {
        step.append(rightBar);
      } else if (index === items.length - 1) {
        step.append(leftBar);
      } else {
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

  // src/popover.ts
  var popover_exports = {};
  __export(popover_exports, {
    makeStacksPopover: () => makeStacksPopover
  });
  var makeStacksPopover = (id, controller, options) => {
    const {
      referenceSelector,
      toggleClass,
      placement,
      toggle,
      autoShow,
      hideOnOutsideClick,
      manualArrowPositioning,
      callbacks,
      contentHtml,
      classes = []
    } = options;
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
      Object.entries(callbacks).map(([name, callback]) => [`s-popover:${name}`, callback]).forEach(([name, callback]) => {
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

  // src/radio.ts
  var radio_exports = {};
  __export(radio_exports, {
    makeStacksRadios: () => makeStacksRadios
  });
  var makeStacksRadios = (radios, groupName, options) => {
    radios.forEach((radio) => {
      radio.name = groupName;
    });
    return input_exports.makeStacksRadiosOrCheckboxes(radios, "radio", options);
  };

  // src/select.ts
  var select_exports = {};
  __export(select_exports, {
    makeStacksSelect: () => makeStacksSelect,
    toggleValidation: () => toggleValidation
  });
  var makeStacksSelect = (id, items, options = {}, labelOptions) => {
    const {
      disabled = false,
      size,
      validation,
      classes = []
    } = options;
    const container = document.createElement("div");
    container.classList.add("d-flex", "gy4", "fd-column");
    if (labelOptions) {
      (labelOptions.parentClasses ||= []).push("flex--item");
      const label = label_exports.makeStacksLabel(id, labelOptions);
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
      const {
        value,
        text,
        selected = false
      } = item;
      const option = document.createElement("option");
      option.value = value;
      option.text = text;
      option.selected = selected;
      select.append(option);
    });
    selectContainer.append(select);
    container.append(selectContainer);
    if (validation) {
      toggleValidation(container, validation);
    }
    return container;
  };
  var toggleValidation = (container, state) => {
    container.classList.remove("has-success", "has-warning", "has-error");
    container.querySelector(".s-input-icon")?.remove();
    if (!state) return;
    container.classList.add(`has-${state}`);
    const [name, path] = icons_exports.validationIcons[state];
    const [icon] = icons_exports.makeStacksIcon(name, path, {
      classes: ["s-input-icon"],
      width: 18
    });
    container.querySelector(".s-select")?.append(icon);
  };

  // src/spinner.ts
  var spinner_exports = {};
  __export(spinner_exports, {
    makeSpinner: () => makeSpinner
  });
  var makeSpinner = (options = {}) => {
    const {
      size = "",
      hiddenText = "",
      classes = []
    } = options;
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

  // src/tags.ts
  var tags_exports = {};
  __export(tags_exports, {
    makeStacksTag: () => makeStacksTag
  });
  var makeStacksTag = (options) => {
    const {
      classes = [],
      name,
      href = "#",
      moderator = false,
      selected = false,
      size = "",
      muted = false,
      required = false,
      sponsor = null,
      dismissable = false,
      onDismiss = null,
      watched = false,
      ignored = false
    } = options;
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
    } else if (ignored) {
      tag.classList.add("s-tag__ignored");
    }
    if (sponsor) {
      const {
        imgUrl,
        width = 18,
        height = 16,
        alt = ""
      } = sponsor;
      const sponsorImg = document.createElement("img");
      sponsorImg.classList.add("s-tag--sponsor");
      sponsorImg.src = imgUrl;
      sponsorImg.width = width;
      sponsorImg.height = height;
      sponsorImg.alt = alt;
      tag.prepend(" ", sponsorImg);
    }
    if (dismissable) {
      const [iconClearSm] = icons_exports.makeStacksIcon(
        "iconClearSm",
        "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z"
      );
      const dismiss = document.createElement("span");
      dismiss.classList.add("s-tag--dismiss");
      dismiss.append(iconClearSm);
      if (onDismiss) {
        dismiss.addEventListener("click", (event) => {
          const span = event.target;
          onDismiss(span?.closest(".s-tag"), event);
        });
      }
      tag.append(" ", dismiss);
    }
    return tag;
  };

  // src/textarea.ts
  var textarea_exports = {};
  __export(textarea_exports, {
    makeStacksTextarea: () => makeStacksTextarea,
    toggleValidation: () => toggleValidation2
  });
  var makeStacksTextarea = (id, textareaOptions = {}, labelOptions) => {
    const {
      value = "",
      classes = [],
      placeholder = "",
      title = "",
      size,
      validation
    } = textareaOptions;
    const textareaParent = document.createElement("div");
    textareaParent.classList.add("d-flex", "fd-column", "gy4", ...classes);
    if (labelOptions) {
      const label = label_exports.makeStacksLabel(id, labelOptions);
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
      toggleValidation2(textareaParent, validation);
    }
    return textareaParent;
  };
  var toggleValidation2 = (textareaParent, validation) => {
    textareaParent.classList.remove("has-success", "has-warning", "has-error");
    const oldTextarea = textareaParent.querySelector(".s-textarea");
    if (!validation) {
      textareaParent.querySelector(".s-input-icon")?.remove();
      textareaParent.querySelector(".s-input-message")?.remove();
      const validationContainer = oldTextarea.parentElement;
      validationContainer?.replaceWith(oldTextarea);
      return;
    }
    const { state, description } = validation;
    textareaParent.classList.add(`has-${state}`);
    const [iconName, iconPath] = icons_exports.validationIcons[state];
    const [icon] = icons_exports.makeStacksIcon(iconName, iconPath, {
      classes: ["s-input-icon"],
      width: 18
    });
    if (oldTextarea.nextElementSibling) {
      oldTextarea.nextElementSibling.replaceWith(icon);
      const inputMessage = textareaParent.querySelector(".s-input-message");
      if (description) {
        if (inputMessage) {
          inputMessage.innerHTML = description;
        } else {
          createAndAppendDescription(description, textareaParent);
        }
      } else if (!description && inputMessage) {
        inputMessage.remove();
      }
    } else {
      const validationContainer = document.createElement("div");
      validationContainer.classList.add("d-flex", "ps-relative");
      validationContainer.append(oldTextarea, icon);
      textareaParent.append(validationContainer);
      if (description) {
        createAndAppendDescription(description, textareaParent);
      }
    }
  };
  var createAndAppendDescription = (description, appendTo) => {
    const message = document.createElement("p");
    message.classList.add("flex--item", "s-input-message");
    message.innerHTML = description;
    appendTo.append(message);
  };

  // src/toggle.ts
  var toggle_exports = {};
  __export(toggle_exports, {
    makeStacksToggle: () => makeStacksToggle
  });
  var makeStacksToggle = (id, labelOptions, on = false, ...classes) => {
    const container = document.createElement("div");
    container.classList.add("d-flex", "g8", "ai-center", ...classes);
    const label = label_exports.makeStacksLabel(id, labelOptions);
    const toggle = document.createElement("input");
    toggle.id = id;
    toggle.classList.add("s-toggle-switch");
    toggle.type = "checkbox";
    toggle.checked = on;
    container.append(label, toggle);
    return container;
  };

  // src/usercards.ts
  var usercards_exports = {};
  __export(usercards_exports, {
    makeBaseUserCard: () => makeBaseUserCard,
    makeFullUserCard: () => makeFullUserCard,
    makeMinimalUserCard: () => makeMinimalUserCard,
    makeSmallUserCard: () => makeSmallUserCard
  });
  var makeFullUserCard = (options) => {
    const {
      avatar,
      user: {
        name = "",
        href = "#",
        reputation = "1",
        badges,
        labels,
        role,
        location,
        tags
      },
      userType,
      classes = []
    } = options;
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
        config.classes?.push("flex--item");
        if (!config?.size) {
          config.size = "xs";
        }
        return tags_exports.makeStacksTag(config);
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
  var makeBaseUserCard = (options) => {
    const {
      avatar,
      time = "",
      user: {
        name = "",
        href = "#",
        reputation = "1",
        badges,
        labels
      },
      deleted,
      highlight,
      userType,
      classes = []
    } = options;
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
    } else {
      link.innerHTML = name;
    }
    infoContainer.append(link);
    userCard.append(timeEl, avatarContainer, infoContainer);
    if (deleted || link instanceof HTMLDivElement) {
      userCard.classList.add("s-user-card__deleted");
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
  var makeSmallUserCard = (options) => {
    const {
      avatar,
      user: {
        badges,
        href = "#",
        reputation = "1"
      },
      classes = []
    } = options;
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
  var makeMinimalUserCard = (options) => {
    const {
      avatar,
      time = "",
      user: {
        name = "",
        href = "#",
        reputation = "1"
      },
      deleted,
      classes = []
    } = options;
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
  var getUserAwards = (reputation, badges) => {
    const awards = document.createElement("ul");
    awards.classList.add("s-user-card--awards");
    const repContainer = document.createElement("li");
    repContainer.classList.add("s-user-card--rep");
    repContainer.innerHTML = reputation;
    awards.append(repContainer);
    if (badges) {
      const badgesEls = Object.entries(badges).map(([color, count]) => {
        const badgeColor = color;
        return badges_exports.makeBling("li", badgeColor, count.toString());
      });
      awards.append(...badgesEls);
    }
    return awards;
  };
  var getLabelElements = (labels) => {
    return labels.map((config) => {
      config.classes?.push("flex--item");
      if (!config.size) {
        config.size = "xs";
      }
      return badges_exports.makeStacksBadge(config);
    });
  };
  var getDefaultUserCardAvatar = (config, defaultHref, defaultSize, deleted) => {
    config?.classes?.push("s-user-card--avatar");
    if (config && !config.size && defaultSize) {
      config.size = defaultSize;
    }
    if (config && !config.href) {
      config.href = defaultHref;
    }
    return avatar_exports.makeAvatar(config, deleted ? "div" : "a");
  };

  // src/buttons/index.ts
  var buttons_exports = {};
  __export(buttons_exports, {
    makeStacksButton: () => makeStacksButton
  });
  var makeStacksButton = (id, text, options = {}) => {
    const {
      title,
      type = [],
      primary = false,
      loading = false,
      selected = false,
      disabled = false,
      badge,
      size,
      iconConfig,
      click,
      classes = []
    } = options;
    const btn = document.createElement("button");
    if (id !== "") {
      btn.id = id;
    }
    btn.classList.add(
      "s-btn",
      ...type.map((name) => `s-btn__${name}`),
      ...classes
    );
    btn.append(text);
    btn.type = "button";
    btn.setAttribute("role", "button");
    const ariaLabel = title || (text instanceof HTMLElement ? text.textContent || "" : text);
    btn.setAttribute("aria-label", ariaLabel);
    if (primary) {
      btn.classList.add("s-btn__filled");
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
      const [icon] = icons_exports.makeStacksIcon(name, path, { width, height });
      btn.prepend(icon, " ");
    }
    if (click) {
      const { handler, options: options2 } = click;
      btn.addEventListener("click", handler, options2);
    }
    return btn;
  };

  // src/icons/index.ts
  var icons_exports = {};
  __export(icons_exports, {
    makeStacksIcon: () => makeStacksIcon,
    validationIcons: () => validationIcons
  });
  var validationIcons = {
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
  var makeStacksIcon = (name, pathConfig, { classes = [], width = 14, height = width } = {}) => {
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

  // src/modals/index.ts
  var modals_exports = {};
  __export(modals_exports, {
    makeStacksModal: () => makeStacksModal
  });
  var makeStacksModal = (id, options) => {
    const {
      classes = [],
      danger = false,
      fullscreen = false,
      celebratory = false,
      title: { text, id: titleId, classes: titleClasses = [] },
      body: { bodyHtml, id: bodyId, classes: bodyClasses = [] },
      footer: { buttons, classes: footerClasses = [] }
    } = options;
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
    footer.classList.add("d-flex", "gx8", "s-modal--footer", ...footerClasses);
    buttons.forEach((button) => {
      const { element, hideOnClick } = button;
      element.classList.add("flex--item");
      if (hideOnClick) {
        element.setAttribute("data-action", "s-modal#hide");
      }
      footer.append(element);
    });
    const [iconClear] = icons_exports.makeStacksIcon(
      "iconClear",
      "M15 4.41 13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41Z",
      { width: 18 }
    );
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

  // src/notifications/index.ts
  var notifications_exports = {};
  __export(notifications_exports, {
    hideToast: () => hideToast,
    makeStacksToast: () => makeStacksToast,
    showToast: () => showToast,
    toggleToast: () => toggleToast
  });
  var makeStacksToast = (id, text, {
    buttons = [],
    classes = [],
    msgClasses = [],
    type = "none",
    important = false
  } = {}) => {
    const wrap = document.createElement("div");
    wrap.classList.add("s-toast", ...classes);
    wrap.setAttribute("aria-hidden", "true");
    wrap.setAttribute("role", "alertdialog");
    wrap.setAttribute("aria-labelledby", "notice-message");
    wrap.id = id;
    const aside = document.createElement("aside");
    aside.classList.add("s-notice", "p8", "pl16");
    if (type !== "none") aside.classList.add(`s-notice__${type}`);
    if (important) aside.classList.add("s-notice__important");
    const msgWrap = document.createElement("div");
    msgWrap.classList.add(
      "d-flex",
      "gx16",
      "ai-center",
      "jc-space-between",
      ...msgClasses
    );
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
    const [dismissIcon] = makeStacksIcon(
      "iconClearSm",
      "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41z"
    );
    dismissBtn.append(dismissIcon);
    btnWrap.append(...buttons);
    msgWrap.append(message, btnWrap);
    aside.append(msgWrap);
    wrap.append(aside);
    return wrap;
  };
  var toggleToast = (target, show) => {
    const toast = typeof target === "string" ? document.querySelector(target) : target;
    if (!toast) throw new ReferenceError(`missing toast: ${target}`);
    const isShown = toast?.getAttribute("aria-hidden") !== "true";
    toast.setAttribute(
      "aria-hidden",
      (show !== void 0 ? !show : isShown).toString()
    );
    return toast;
  };
  var hideToast = (target, hideFor) => {
    const toast = toggleToast(target, false);
    if (hideFor) setTimeout(() => showToast(toast), hideFor * 1e3);
  };
  var showToast = (target, showFor) => {
    const toast = toggleToast(target, true);
    if (showFor) setTimeout(() => hideToast(toast), showFor * 1e3);
  };
})();
