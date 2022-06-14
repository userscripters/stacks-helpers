import { StacksCommonOptions, Icons } from "./index";

export type StacksTagsOptions = StacksCommonOptions & {
    /** The name of the tag */
    name: string;

    /** The URL the tag should link to */
    href?: string;
    /** Whether the tag is a moderator-only tag */
    moderator?: boolean;
    /** Whether the tag should be selected */
    selected?: boolean;
    /** The size of the tag */
    size?: "xs" | "sm" | "md" | "lg";
    /** Whether to apply a muted style to the tag */
    muted?: boolean;
    /** Whether the tag is a required tag */
    required?: boolean;

    /** Sponsor information */
    sponsor?: {
        /** The image URL */
        imgUrl: string;
        /** The image width */
        width?: number;
        /** The image height */
        height?: number;
        /** The image alt text */
        alt?: string;
    };

    /** Whether the tag can be dismissed */
    dismissable?: boolean;
    /**
     * Handler called when the dismiss button is clicked
     * @param {HTMLDivElement} tag the tag element
     * @param {MouseEvent} event the click event
     */
    onDismiss?: (tag: HTMLDivElement, event: MouseEvent) => void;
};

// TODO add icon SVG support

/**
 * @see https://stackoverflow.design/product/components/tags/
 *
 * @summary Creates a Stacks tag
 * @param {StacksTagsOptions} options - configuration
 * @returns {AnchorElement}
 */
export const makeStacksTag = (
    options: StacksTagsOptions
): HTMLAnchorElement => {
    const {
        classes = [],
        name,
        href = "#",
        moderator = false,
        selected = false,
        size = "",
        muted = false,
        required = false,
        sponsor = null,
        dismissable = false,
        onDismiss = null,
    } = options;

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

    if (sponsor) {
        const {
            imgUrl,
            width = 18,
            height = 16,
            alt = ""
        } = sponsor;

        const sponsorImg = document.createElement("img");
        sponsorImg.classList.add("s-tag--sponsor");
        sponsorImg.src = imgUrl;
        sponsorImg.width = width;
        sponsorImg.height = height;
        sponsorImg.alt = alt;

        tag.prepend(" ", sponsorImg);
    }

    if (dismissable) {
        const [iconClearSm] = Icons.makeStacksIcon(
            "iconClearSm",
            "M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z"
        );

        const dismiss = document.createElement("span");
        dismiss.classList.add("s-tag--dismiss");
        dismiss.append(iconClearSm);

        if (onDismiss) {
            dismiss.addEventListener("click", (event) => {
                const span = event.target as HTMLSpanElement;
                onDismiss(span?.closest(".s-tag") as HTMLDivElement, event);
            });
        }

        tag.append(" ", dismiss);
    }

    return tag;
};