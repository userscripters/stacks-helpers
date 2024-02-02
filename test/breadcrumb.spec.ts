import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeStacksBreadcrumb, BreadcrumbItem } from "../src/breadcrumb";
import { makeStacksIcon } from "../src/icons";
import { JSDOM } from "jsdom";

describe("Breadcrumb", function() {
    const breadcrumbs = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeStacksBreadcrumb, makeStacksIcon, Icons: "{ makeStacksIcon }" });
    });

    it("should correctly generate breadcrumbs", () => {
        const breadcrumb = window.makeStacksBreadcrumb as typeof makeStacksBreadcrumb;

        (
          [
              [
                  { label: "MSO", href: "#" },
                  { label: "Help center", href: "#" },
                  { label: "Asking", href: "#" }
              ],
              [
                  { label: "SE", href: "#" },
                  { label: "Review queues", href: "#" }
              ]
          ] as BreadcrumbItem[][]
        ).forEach((data, index) => {
            const el = breadcrumb(data);

            expect(el.outerHTML).to.equal(breadcrumbs[index].outerHTML);
        });
    });
});