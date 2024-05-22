"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPage = exports.makePagination = void 0;
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
    container.append(...first.map((page) => (0, exports.createPage)(page, generator(page), page === selectedPage)), clear.cloneNode(true));
    if (middle) {
        container.append(...middle.map((page) => (0, exports.createPage)(page, generator(page), page === selectedPage)), clear.cloneNode(true));
    }
    container.append(...last.map((page) => (0, exports.createPage)(page, generator(page), page === selectedPage)), nextButton);
    return container;
};
exports.makePagination = makePagination;
const createPage = (page, url, isSelected) => {
    const element = document.createElement(isSelected ? "span" : "a");
    element.classList.add("s-pagination--item");
    const span = document.createElement("span");
    span.classList.add("v-visible-sr");
    span.textContent = "page";
    element.append(span, page.toString());
    if (element instanceof HTMLAnchorElement) {
        element.href = url;
    }
    else {
        element.classList.add("is-selected");
        element.ariaCurrent = "page";
    }
    return element;
};
exports.createPage = createPage;
