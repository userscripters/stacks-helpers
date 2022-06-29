import { Icons } from "./index";
/**
 * @see https://stackoverflow.design/product/components/breadcrumbs/
 *
 * @summary Creates a Stacks breadcrumb
 * @param {BreadcrumbItem[]} items An array of items to display in the breadcrumb
 * @param {StacksCommonOptions} options configuration
 * @returns {HTMLElement}
 */
export const makeStacksBreadcrumb = (items, options) => {
    const { classes = [] } = options;
    const nav = document.createElement("nav");
    nav.classList.add("s-breadcrumbs", "mb6", "sm:mb2", ...classes);
    items.forEach((item, index) => {
        const { label, href = "#", } = item;
        const breadcrumbItem = document.createElement("div");
        breadcrumbItem.classList.add("s-breadcrumbs--item");
        const breadcrumbLink = document.createElement("a");
        breadcrumbLink.classList.add("s-breadcrumbs--link");
        breadcrumbLink.href = href;
        if (Array.isArray(label)) {
            // this is an icon
            const [name, path] = label;
            const [icon] = Icons.makeStacksIcon(name, path, {
                classes: ["mtn2"],
                width: 18
            });
            breadcrumbLink.append(icon);
        }
        else {
            breadcrumbLink.append(label);
        }
        breadcrumbItem.append(breadcrumbLink);
        if (index !== items.length - 1) {
            const [dividerIcon] = Icons.makeStacksIcon("iconArrowRightAltSm", "m4.38 4.62 1.24-1.24L9.24 7l-3.62 3.62-1.24-1.24L6.76 7 4.38 4.62Z", {
                classes: ["s-breadcrumbs--divider"],
                width: 13,
                height: 14
            });
            breadcrumbItem.append(dividerIcon);
        }
        nav.append(breadcrumbItem);
    });
    return nav;
};
