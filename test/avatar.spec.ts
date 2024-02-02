import { expect } from "chai";
import { makeAvatar, StacksAvatarOptions } from "../src/avatar";
import { getSample, appendScript } from "./index.spec";
import { JSDOM } from "jsdom";

describe("Avatar", function() {
    const avatars = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeAvatar });
    });


    it("should correctly generate avatars", () => {
        const avatar = window.makeAvatar as typeof makeAvatar;

        (
          [
              { src: "https://picsum.photos/32", href: "#", classes: [ "my-class" ] },
              { src: "https://picsum.photos/48", href: "https://example.com", size: 24 },
              { src: "https://picsum.photos/64", href: "#", size: 32 },
              { src: "https://picsum.photos/256", href: "#", size: 128 },
          ] as StacksAvatarOptions[]
        ).forEach((data, index) => {
            const el = avatar(data);

            expect(el.isEqualNode(avatars[index])).to.equal(true);
        });
    });
});