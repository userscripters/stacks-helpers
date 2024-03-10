import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeNavigation, createNavItem, StacksNavigationOptions } from "../src/navigation";
import { JSDOM } from "jsdom";

describe("Navigation", function() {
    const nav = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeNavigation, createNavItem });
    });

    it("should correctly generate navigation items", () => {
        const navigation = window.makeNavigation as typeof makeNavigation;

        (
            [
                {
                    navItems: [
                        { text: "Product" },
                        { text: "Email" },
                        { text: "Content" },
                        { text: "Brand" },
                        { text: "Marketing" },
                    ]
                },
                {
                    navItems: [
                        { text: "Product" },
                        { text: "Email" },
                        { text: "Content" },
                        { text: "Brand" },
                        { text: "Marketing" },
                    ],
                    navType: "muted"
                },
                {
                    navItems: [
                        { text: "Product" },
                        { text: "Email" },
                        { text: "Content" },
                        { text: "Brand" },
                        { text: "Marketing" },
                    ],
                    navType: "scroll"
                },
                {
                    navItems: [
                        { text: "Product" },
                        { text: "Email" },
                        { text: "More", dropdown: true },
                    ],
                    ariaLabel: "dropdown navigation",
                    classes: ["wmx3"]
                },
                {
                    navItems: [
                        { text: "Product" },
                        { text: "Email" },
                        { text: "Content" },
                        { text: "Brand" },
                        { text: "Marketing" },
                    ],
                    navType: "sm"
                },
                {
                    navItems: [
                        { text: "Product" },
                        { text: "Email" },
                        { text: "Content" },
                        { text: "Brand" },
                        { text: "Marketing" },
                    ],
                    navType: "vertical"
                },
                {
                    navItems: [
                        { title: "Resources" },
                        { text: "Icons" },
                        { text: "Spot illustrations" },

                        { title: "Base" },
                        { text: "Backgrounds" },
                        { text: "Borders" },
                        { text: "Border radius" },
                        { text: "Box shadow" },
                        { text: "Box sizing" },
                    ],
                    navType: "vertical",
                    selectIndex: 1,
                    classes: ["ws2"]
                },
            ] as StacksNavigationOptions[]
        ).forEach((data, index) => {
            const el = navigation(data);

            expect(el.outerHTML).to.equal(nav[index].outerHTML);
        });
    });
});