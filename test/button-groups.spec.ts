import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeStacksButtonGroup, GroupButton } from "../src/button-groups";
import { makeStacksButton } from "../src/buttons";
import { JSDOM } from "jsdom";

describe("Button groups", function() {
    const buttonGroups = getSample(this.title.toLowerCase().replace(" ", "-"));

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeStacksButtonGroup, makeStacksButton, Buttons: "{ makeStacksButton }" });
    });

    it("should correctly generate button groups", () => {
        const group = window.makeStacksButtonGroup as typeof makeStacksButtonGroup;

        (
            [
                [
                    { text: "Newest" },
                    { text: "Frequent" },
                    { text: "Votes", form: true, selected: true },
                    { text: "Active" },
                    { text: "Unanswered", form: true },
                ],
                [
                    { text: "Active", count: 197 },
                    { text: "Inactive", count: 37, types: [ "dropdown" ], selected: true },
                    { text: "All", count: 234 }
                ]
            ] as GroupButton[][]
        ).forEach((data, index) => {
            const el = group(data);

            expect(el.outerHTML).to.equal(buttonGroups[index].outerHTML);
        });
    });
});