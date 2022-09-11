"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
