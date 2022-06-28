import { Avatar, Badges, Tag } from ".";
/**
 * @see https://stackoverflow.design/product/components/user-cards/#full
 *
 * @summary Creates a Stacks full user card
 * @param {FullUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
export const makeFullUserCard = (options) => {
    const { avatar, user: { name = "", href = "#", reputation = "1", badges, labels, role, location, tags }, userType, classes = [], } = options;
    const userCard = document.createElement("div");
    userCard.classList.add("s-user-card", "s-user-card__full", ...classes);
    const avatarContainer = getDefaultUserCardAvatar(avatar, href, 48);
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("s-user-card--info");
    const link = document.createElement("a");
    link.classList.add("s-user-card--link", "d-flex", "g4");
    link.href = href;
    const username = document.createElement("div");
    username.classList.add("flex--item");
    username.innerHTML = name;
    link.append(username);
    if (labels) {
        const elements = getLabelElements(labels);
        link.append(...elements);
    }
    const awards = getUserAwards(reputation, badges);
    infoContainer.append(link, awards);
    if (role) {
        const roleEl = document.createElement("div");
        roleEl.classList.add("s-user-card--role");
        roleEl.innerHTML = role;
        infoContainer.append(roleEl);
    }
    if (location) {
        const locationEl = document.createElement("div");
        locationEl.classList.add("s-user-card--location");
        locationEl.innerHTML = location;
        infoContainer.append(locationEl);
    }
    if (tags) {
        const userTags = document.createElement("div");
        userTags.classList.add("s-user-card--tags", "d-flex", "g4");
        const tagsEls = tags.map((config) => {
            var _a;
            (_a = config.classes) === null || _a === void 0 ? void 0 : _a.push("flex--item");
            if (!(config === null || config === void 0 ? void 0 : config.size)) {
                // default tag size for full cards
                config.size = "xs";
            }
            return Tag.makeStacksTag(config);
        });
        userTags.append(...tagsEls);
        infoContainer.append(userTags);
    }
    userCard.append(avatarContainer, infoContainer);
    if (userType) {
        const userTypeEl = document.createElement("div");
        userTypeEl.classList.add("s-user-card--type");
        userTypeEl.innerHTML = userType;
        userCard.append(userTypeEl);
    }
    return userCard;
};
/**
 * @see https://stackoverflow.design/product/components/user-cards/#base
 *
 * @summary Creates a Stacks base user card
 * @param {BaseUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
export const makeBaseUserCard = (options) => {
    const { avatar, time = "", user: { name = "", href = "#", reputation = "1", badges, labels, }, deleted, highlight, userType, classes = [], } = options;
    const userCard = document.createElement("div");
    userCard.classList.add("s-user-card", ...classes);
    if (highlight) {
        userCard.classList.add("s-user-card__highlighted");
    }
    const timeEl = document.createElement("time");
    timeEl.classList.add("s-user-card--time");
    timeEl.innerHTML = time;
    const avatarContainer = getDefaultUserCardAvatar(avatar, href, 32, deleted);
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("s-user-card--info");
    const link = document.createElement(deleted ? "div" : "a");
    link.classList.add("s-user-card--link", "d-flex", "g4");
    if (labels) {
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("flex--item");
        nameDiv.innerHTML = name;
        link.append(nameDiv, ...getLabelElements(labels));
    }
    else {
        link.innerHTML = name;
    }
    infoContainer.append(link);
    userCard.append(timeEl, avatarContainer, infoContainer);
    // (if one is true, both are guaranteed to be true,
    //  doing this to shut up the TS compiler)
    if (deleted || link instanceof HTMLDivElement) {
        userCard.classList.add("s-user-card__deleted");
        // no more info for deleted users
        return userCard;
    }
    link.href = href;
    const awards = getUserAwards(reputation, badges);
    infoContainer.append(awards);
    if (userType) {
        const userTypeEl = document.createElement("div");
        userTypeEl.classList.add("s-user-card--type");
        userTypeEl.innerText = userType;
        userCard.append(userTypeEl);
    }
    return userCard;
};
/**
 * @see https://stackoverflow.design/product/components/user-cards/#small
 *
 * @summary Creates a Stacks small user card
 * @param {SmallUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
export const makeSmallUserCard = (options) => {
    const { avatar, user: { badges, href = "#", reputation = "1", }, classes = [], } = options;
    const userCard = document.createElement("div");
    userCard.classList.add("s-user-card", "s-user-card__small", ...classes);
    const avatarContainer = getDefaultUserCardAvatar(avatar, href, 24);
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("s-user-card--info");
    const awards = getUserAwards(reputation, badges);
    infoContainer.append(awards);
    userCard.append(avatarContainer, infoContainer);
    return userCard;
};
/**
 * @see https://stackoverflow.design/product/components/user-cards/#minimal
 *
 * @summary Creates a Stacks minimal user card
 * @param {MinimalUserCardOptions} options configuration
 * @returns {HTMLDivElement}
 */
export const makeMinimalUserCard = (options) => {
    const { avatar, time = "", user: { name = "", href = "#", reputation = "1", }, deleted, classes = [], } = options;
    const userCard = document.createElement("div");
    userCard.classList.add("s-user-card", "s-user-card__minimal", ...classes);
    if (deleted) {
        userCard.classList.add("s-user-card__deleted");
    }
    if (avatar) {
        const avatarContainer = getDefaultUserCardAvatar(avatar, href, "", deleted);
        userCard.prepend(avatarContainer);
    }
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("s-user-card--info");
    const link = document.createElement(deleted ? "div" : "a");
    link.classList.add("s-user-card--link");
    link.innerHTML = name;
    if (link instanceof HTMLAnchorElement) {
        link.href = href;
    }
    const awards = getUserAwards(reputation);
    infoContainer.append(link, !deleted ? awards : "");
    const timeEl = document.createElement("time");
    timeEl.classList.add("s-user-card--time");
    timeEl.innerText = time;
    userCard.append(infoContainer, timeEl);
    return userCard;
};
/**
 * @summary Helper for getting the user awards `<li>`
 * @param {string} reputation The user's reputation
 * @param {AllUserCardOptions["user"]["badge"]} badges The user's badges
 * @returns {HTMLUListElement}
 */
const getUserAwards = (reputation, badges) => {
    const awards = document.createElement("ul");
    awards.classList.add("s-user-card--awards");
    const repContainer = document.createElement("li");
    repContainer.classList.add("s-user-card--rep");
    repContainer.innerHTML = reputation;
    awards.append(repContainer);
    if (badges) {
        const badgesEls = Object
            .entries(badges)
            .map(([color, count]) => {
            const badgeColor = color;
            return Badges.makeBling("li", badgeColor, count.toString());
        });
        awards.append(...badgesEls);
    }
    return awards;
};
/**
 * @summary Helper for getting the user staff/admin/mod badges
 * @param {Required<AllUserCardOptions["user"]>["labels"]} labels badges configuration
 * @returns {HTMLSpanElement[]}
 */
const getLabelElements = (labels) => {
    return labels.map((config) => {
        var _a;
        (_a = config.classes) === null || _a === void 0 ? void 0 : _a.push("flex--item");
        if (!config.size) {
            // default badge size for full cards
            config.size = "xs";
        }
        return Badges.makeStacksBadge(config);
    });
};
/**
 * @summary Helper for getting the default user avatar
 * @param {AllUserCardOptions["avatar"]} avatar avatar configuration
 * @param {string} defaultHref The default href to apply
 * @param {number} defaultSize The default size of the avatar
 * @param {boolean} deleted Whether the user is a deleted user
 * @returns {HTMLDivElement}
 */
const getDefaultUserCardAvatar = (config, defaultHref, defaultSize, deleted) => {
    var _a;
    (_a = config === null || config === void 0 ? void 0 : config.classes) === null || _a === void 0 ? void 0 : _a.push("s-user-card--avatar");
    if (config && !config.size && defaultSize) {
        // default size for base cards
        config.size = defaultSize;
    }
    if (config && !config.href) {
        config.href = defaultHref;
    }
    return Avatar.makeAvatar(config, deleted ? "div" : "a");
};
