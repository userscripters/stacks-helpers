import { StacksCommonOptions } from "./index";


// pages can be passed in three batches (middle one optional), e.g.
// [1], [4, 5, 6], [100] => 1 ... 4 5 6 ... 100
// [1, 2, 3, 4, 5], [], [100] => 1 2 3 4 5 ... 100
// [1], [], [95, 96, 97, 98, 99, 100] => 1 ... 95 96 97 98 99 100
export type StacksPaginationOptions = StacksCommonOptions & {
    /** The first batch */
    first: number[];
    /** The middle batch (optional) */
    middle?: number[];
    /** The last batch */
    last: number[];
    /** Called to determine the URL of a page button given the page number */
    generator: (page: number) => string;
    /** The selected page number */
    selectedPage?: number;
    /** The link the Next button should point to */
    nextButtonHref?: string;
};

/**
 * @see https://stackoverflow.design/product/components/pagination/
 *
 * @summary Creates a Stacks pagination component
 * @param {StacksPaginationOptions} options
 * @returns {HTMLDivElement}
 */
export const makePagination = (
    options: StacksPaginationOptions,
): HTMLDivElement => {
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

/**
 * @summary Creates a page button
 * @param {number} page - The page number
 * @param {string} url - The url for the page
 * @param {boolean} isSelected - Whether the page is selected
 * @returns {HTMLSpanElement | HTMLAnchorElement} The page button
 */
export const createPage = (
    page: number,
    url: string,
    isSelected: boolean,
): HTMLSpanElement | HTMLAnchorElement => {
    const element = document.createElement(isSelected ? "span" : "a");
    element.classList.add("s-pagination--item");

    const span = document.createElement("span");
    span.classList.add("v-visible-sr");
    span.textContent = "page";

    element.append(span, page.toString());

    if (element instanceof HTMLAnchorElement) {
        element.href = url;
    } else {
        //    element is not an anchor
        // => element is a span
        // => it should be selected
        element.classList.add("is-selected");
        element.ariaCurrent = "page";
    }

    return element;
};
