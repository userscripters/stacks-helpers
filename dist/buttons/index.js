"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksButton = void 0;
const index_1 = require("../index");
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
