import { Icons } from "./index";
export const makeStacksTag = (options) => {
    const { classes = [], name, href = "#", moderator = false, selected = false, size = "", muted = false, required = false, sponsor = null, dismissable = false, onDismiss = null, watched = false, ignored = false, } = options;
    const tag = document.createElement("a");
    tag.classList.add("s-tag", ...classes);
    tag.href = href;
    tag.textContent = name;
    if (moderator) {
        tag.classList.add("s-tag__moderator");
    }
    if (selected) {
        tag.classList.add("is-selected");
    }
    if (size) {
        tag.classList.add(`s-tag__${size}`);
    }
    if (muted) {
        tag.classList.add("s-tag__muted");
    }
    if (required) {
        tag.classList.add("s-tag__required");
    }
    if (watched) {
        tag.classList.add("s-tag__watched");
    }
    else if (ignored) {
        tag.classList.add("s-tag__ignored");
    }
    if (sponsor) {
        const { imgUrl, width = 18, height = 16, alt = "" } = sponsor;
        const sponsorImg = document.createElement("img");
        sponsorImg.classList.add("s-tag--sponsor");
        sponsorImg.src = imgUrl;
        sponsorImg.width = width;
        sponsorImg.height = height;
        sponsorImg.alt = alt;
        tag.prepend(" ", sponsorImg);
    }
    if (dismissable) {
        const [iconClearSm] = Icons.makeStacksIcon("iconClearSm", "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z");
        const dismiss = document.createElement("span");
        dismiss.classList.add("s-tag--dismiss");
        dismiss.append(iconClearSm);
        if (onDismiss) {
            dismiss.addEventListener("click", (event) => {
                const span = event.target;
                onDismiss(span === null || span === void 0 ? void 0 : span.closest(".s-tag"), event);
            });
        }
        tag.append(" ", dismiss);
    }
    return tag;
};
