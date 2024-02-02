import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeStacksButton, StacksIconButtonOptions } from "../src/buttons";
import { makeStacksIcon } from "../src/icons";
import { JSDOM } from "jsdom";

describe("Buttons", function() {
    const buttons = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeStacksButton, makeStacksIcon, Icons: "{ makeStacksIcon }" });
    });

    it("should correctly generate buttons", () => {
        const button = window.makeStacksButton as typeof makeStacksButton;

        (
          [
              /* Base */
              {},
              { selected: true },
              { disabled: true },
              { type: ["outlined"] },
              { type: ["outlined"], selected: true },
              { type: ["outlined"], disabled: true },
              { type: ["filled"] },
              { type: ["filled"], selected: true },
              { type: ["filled"], disabled: true },

              /* Danger */
              { type: ["danger"] },
              { type: ["danger"], selected: true },
              { type: ["danger"], disabled: true },
              { type: ["danger", "outlined"] },
              { type: ["danger", "outlined"], selected: true },
              { type: ["danger", "outlined"], disabled: true },
              { type: ["danger", "filled"] },
              { type: ["danger", "filled"], selected: true },
              { type: ["danger", "filled"], disabled: true },

              /* Muted */
              { type: ["muted"] },
              { type: ["muted"], selected: true },
              { type: ["muted"], disabled: true },
              { type: ["muted", "outlined"] },
              { type: ["muted", "outlined"], selected: true },
              { type: ["muted", "outlined"], disabled: true },

              /* Primary */
              { primary: true },
              { primary: true, selected: true },
              { primary: true, disabled: true },

              /* Loading */
              { loading: true },
              { loading: true, type: ["outlined"] },
              { loading: true, type: ["filled"] },
              { loading: true, type: ["danger"] },
              { loading: true, type: ["danger", "outlined"] },
              { loading: true, type: ["danger", "filled"] },
              { loading: true, type: ["muted"] },
              { loading: true, type: ["muted", "outlined"] },

              /* Dropdowns */
              { type: ["dropdown"] },
              { type: ["dropdown", "outlined"] },
              { type: ["dropdown", "filled"] },
              { type: ["dropdown", "danger"] },
              { type: ["dropdown", "danger", "outlined"] },
              { type: ["dropdown", "danger", "filled"] },
              { type: ["dropdown", "muted"] },
              { type: ["dropdown", "muted", "outlined"] },

              /* Badges */
              { badge: 198 },
              { badge: 198, type: ["outlined"] },
              { badge: 198, type: ["filled"] },
              { badge: 198, type: ["danger"] },
              { badge: 198, type: ["danger", "outlined"] },
              { badge: 198, type: ["danger", "filled"] },
              { badge: 198, type: ["muted"] },
              { badge: 198, type: ["muted", "outlined"] },

              /* Sizes */
              { size: "xs", primary: true },
              { size: "sm", primary: true },
              { size: "md", primary: true },

              /* Resets */
              { type: ["unset"] },
              { type: ["link"] },

              /* Icons */
              {
                  type: ["danger"],
                  iconConfig: {
                      name: "iconTrash",
                      path: "M15 2a1 1 0 0 1 1 1v1H2V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2Zm0 3H3v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5Z",
                      width: 18,
                      height: 18
                  },
                  classes: ["mr8"],
              },

              /* Social */
              {
                  type: ["facebook"],
                  iconConfig: {
                      name: "iconFacebook",
                      path: "M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z",
                      width: 18,
                      height: 18,
                  },
                  classes: ["mr8"]
              },
              {
                  type: ["github"],
                  iconConfig: {
                      name: "iconGitHub",
                      path: "M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z",
                      width: 18,
                      height: 18,
                  },
                  classes: ["mr8"]
              },
          ] as StacksIconButtonOptions[]
        ).forEach((data, index) => {
            const el = button(
                "id",
                data.badge ? "Active" : "Ask question",
                data
            );

            expect(el.outerHTML).to.equal(buttons[index].outerHTML);
        });
    });
});