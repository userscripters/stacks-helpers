import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeIndicator, StacksIndicatorOptions } from "../src/indicator";
import { makeStacksIcon } from "../src/icons";
import { JSDOM } from "jsdom";

describe("Indicator", function() {
    const indicators = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeIndicator, makeStacksIcon, Icons: "{ makeStacksIcon }" });
    });

    it("should correctly generate activity indicators", () => {
        const indicator = window.makeIndicator as typeof makeIndicator;

        (
          [
              {},
              { hiddenText: "New activity" },
              { text: "370", hiddenText: "New activity" },
              { text: "NEW", hiddenText: "New activity" },

              {
                  iconConfig: {
                      name: "iconBell",
                      path: "M16 13v1H2v-1l.73-.58c.77-.77.81-3.55 1.19-5.42C4.69 3.23 8 2 8 2a1 1 0 0 1 1-1 1 1 0 0 1 1 1s3.39 1.23 4.16 5c.38 1.88.42 4.66 1.19 5.42l.66.58H16Zm-7 4a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2Z",
                      width: 18,
                      height: 18
                  }
              },
              {
                  type: "success",
                  iconConfig: {
                      name: "iconBell",
                      path: "M16 13v1H2v-1l.73-.58c.77-.77.81-3.55 1.19-5.42C4.69 3.23 8 2 8 2a1 1 0 0 1 1-1 1 1 0 0 1 1 1s3.39 1.23 4.16 5c.38 1.88.42 4.66 1.19 5.42l.66.58H16Zm-7 4a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2Z",
                      width: 18,
                      height: 18
                  }
              },

              { type: "success", hiddenText: "New activity" },
              { type: "warning", text: "370", hiddenText: "New activity" },
              { type: "danger", text: "NEW", hiddenText: "New activity" },
          ] as StacksIndicatorOptions[]
        ).forEach((data, index) => {
            const el = indicator(data);

            expect(el.outerHTML).to.equal(indicators[index].outerHTML);
        });
    });
});