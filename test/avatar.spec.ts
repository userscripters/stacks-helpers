import { expect } from "chai";
import { makeAvatar, StacksAvatarOptions } from "../src/avatar";
import { JSDOM } from "jsdom";
import fs from "fs";

describe('Avatar', () => {
    const samplePath = new URL("avatar.html", import.meta.url);
    const avatars = fs.readFileSync(samplePath, "utf-8").split("\n");

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM(``, { runScripts: "dangerously" }).window;

        const script = window.document.createElement("script");
        script.textContent = `window.makeAvatar = ${makeAvatar}`;
        window.document.body.append(script);
    });

    it('should correctly generate avatars', () => {
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

            expect(el.outerHTML).to.equal(avatars[index]);
        });

        expect(true).to.be.true;
    });
});