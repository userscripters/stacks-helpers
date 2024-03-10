import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeLink, StacksLinksOptions } from "../src/links";
import { JSDOM } from "jsdom";

describe("Links", function() {
    const links = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeLink });
    });

    it("should correctly generate Stacks links", () => {
        const link = window.makeLink as typeof makeLink;

        (
            [
                { href: "#", text: "Default" },
                { href: "#", type: "grayscale", text: "Grayscale" },
                { href: "#", type: "muted", text: "Muted" },
                { href: "#", type: "danger", text: "Danger" },
                { href: "#", type: "inherit", text: "Inherit" },
                { href: "#", type: "underlined", text: "Underlined" },
                { isButton: true, text: "Button Link" },
                { href: "#", type: "visited", text: "Visited" },
                { href: "#", type: "dropdown", text: "Links" },

                { href: "#", blockLink: {}, text: "Block link" },
                { href: "#", blockLink: { selected: true }, text: "Selected block link" },

                {
                    href: "#",
                    blockLink: {
                        selected: true,
                        border: "right"
                    },
                    text: "Selected block link right"
                },
                {
                    href: "#",
                    blockLink: {
                        selected: true,
                        border: "left"
                    },
                    text: "Selected block link left"
                },

                {
                    href: "#",
                    blockLink: { danger: true },
                    text: "Block danger link"
                },
                {
                    href: "#",
                    blockLink: {
                        selected: true,
                        danger: true
                    },
                    text: "Selected block danger link"
                },
                {
                    href: "#",
                    blockLink: {
                        selected: true,
                        danger: true,
                        border: "right"
                    },
                    text: "Selected block danger link right"
                },
                {
                    href: "#",
                    blockLink: {
                        selected: true,
                        danger: true,
                        border: "left"
                    },
                    text: "Selected block danger link left"
                },
            ] as StacksLinksOptions[]
        ).forEach((data, index) => {
            const el = link(data);

            expect(el.outerHTML).to.equal(links[index].outerHTML);
        });
    });
});