import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeStacksNotice, StacksNoticesOptions } from "../src/notices";
import { makeStacksIcon } from "../src/icons";
import { JSDOM } from "jsdom";

describe("Notices", function() {
    const notices = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeStacksNotice, makeStacksIcon, Icons: "{ makeStacksIcon }" });
    });

    it("should correctly generate notices", () => {
        const notice = window.makeStacksNotice as typeof makeStacksNotice;

        (
            [
                { text: "text" },
                { text: "text", type: "info" },
                { text: "text", type: "success" },
                { text: "text", type: "warning" },
                { text: "text", type: "danger" },

                { text: "text", important: true },
                { text: "text", type: "info", important: true },
                { text: "text", type: "success", important: true },
                { text: "text", type: "warning", important: true },
                { text: "text", type: "danger", important: true },

                {
                    text: "This question and its answers are locked because the question is off-topic",
                    icon: [
                        "iconAlert",
                        "M7.95 2.71c.58-.94 1.52-.94 2.1 0l7.69 12.58c.58.94.15 1.71-.96 1.71H1.22C.1 17-.32 16.23.26 15.29zM8 6v5h2V6zm0 7v2h2v-2z"
                    ],
                    type: "info"
                }
            ] as StacksNoticesOptions[]
        ).forEach((data, index) => {
            const el = notice(data);

            expect(el.outerHTML).to.equal(notices[index].outerHTML);
        });
    });
});