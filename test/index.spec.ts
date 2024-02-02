import { JSDOM } from "jsdom";
import fs from "fs";

export function appendScript(
    window: JSDOM["window"],
    functions: { [key: string]: Function | Object }
) {
    const scriptContent = Object.entries(functions)
        .map(([name, func]) => `window.${name} = ${func};`)
        .join(" ");

    const script = window.document.createElement("script");
    script.textContent = scriptContent;
    window.document.body.append(script);
}

export function getSample(name: string) {
    const samplePath = new URL(`sample/${name}.html`, import.meta.url);
    const content = fs.readFileSync(samplePath, "utf-8").split("\n");

    return content.map((el) => {
        return new JSDOM(el).window.document.body.firstElementChild as HTMLElement;
    });
}