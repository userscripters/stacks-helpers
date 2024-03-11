import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makePagination, createPage, StacksPaginationOptions } from "../src/pagination";
import { JSDOM } from "jsdom";

describe("Pagination", function() {
    const pageNums = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makePagination, createPage });
    });

    it("should correctly generate pagination", () => {
        const pagination = window.makePagination as typeof makePagination;

        (
            [
                {
                    first: [1, 2, 3, 4, 5],
                    last: [122386],
                    selectedPage: 1,
                    nextButtonHref: "#",
                    generator: () => "#"
                },
                {
                    first: [1, 2, 3],
                    middle: [13, 14, 15],
                    last: [99, 100],
                    selectedPage: 14,
                    nextButtonHref: "#",
                    generator: () => "#"
                },
            ] as StacksPaginationOptions[]
        ).forEach((data, index) => {
            const el = pagination(data);

            expect(el.outerHTML).to.equal(pageNums[index].outerHTML);
        });
    });
});