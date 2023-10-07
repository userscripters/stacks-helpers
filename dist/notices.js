"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStacksNotice = void 0;
const index_1 = require("./index");
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
