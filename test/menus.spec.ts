import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeMenu, StacksMenuOptions } from "../src/menus";
import { makeLink } from "../src/links";
import { JSDOM } from "jsdom";

describe("Menus", function() {
    const menus = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeMenu, makeLink, Links: "{ makeLink }" });
    });

    it("should correctly generate menus", () => {
        const menu = window.makeMenu as typeof makeMenu;

        (
            [
                {
                    itemsType: "a",
                    navItems: [
                        { href: "#", text: "Share" },
                        { href: "#", text: "Edit" },
                        { href: "#", isButton: true, text: "Follow" },
                    ]
                },
                {
                    itemsType: "a",
                    navItems: [
                        { separatorType: "title", separatorText: "Share via" },
                        { href: "#", text: "Email" },
                        { href: "#", text: "Facebook" },
                        { href: "#", text: "Twitter" },
                        { separatorType: "divider" },
                        { href: "#", blockLink: { danger: true }, text: "Deactivate" },
                        { href: "#", blockLink: { danger: true }, text: "Delete" },
                    ]
                },
                {
                    itemsType: "a",
                    navItems: [
                        { href: "#", text: "Frequent" },
                        { href: "#", text: "Votes" },
                        { href: "#", blockLink: { border: "left", selected: true }, text: "Unanswered" },
                        { separatorType: "title", separatorText: "Custom filters" },
                        { href: "#", text: "Frontend questions" },
                        { href: "#", text: "Design systems" },
                    ]
                },
            ] as StacksMenuOptions[]
        ).forEach((data, index) => {
            const el = menu(data);

            expect(el.outerHTML).to.equal(menus[index].outerHTML);
        });
    });
});