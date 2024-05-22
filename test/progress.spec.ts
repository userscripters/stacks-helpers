import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeBaseBar, StacksBaseBarOptions } from "../src/progress";
import { JSDOM } from "jsdom";

describe("Progress", function() {
    const pageNums = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeBaseBar });
    });

    it("should correctly generate progress bars", () => {
        const bars = window.makeBaseBar as typeof makeBaseBar;

        (
            [
                { width: 33, coloring: "info" },
                { width: 66 },
            ] as StacksBaseBarOptions[]
        ).forEach((data, index) => {
            const el = bars("id", data);

            expect(el.outerHTML).to.equal(pageNums[index].outerHTML);
        });
    });
});