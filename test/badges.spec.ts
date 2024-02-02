import { expect } from "chai";
import { appendScript, getSample } from "./index.spec";
import { makeStacksBadge, StacksBadgesOptions, makeBling } from "../src/badges";
import { makeStacksIcon } from "../src/icons";
import { JSDOM } from "jsdom";

describe("Badges", function() {
    const badges = getSample(this.title.toLowerCase());

    let window: JSDOM["window"];

    beforeEach(() => {
        window = new JSDOM("", { runScripts: "dangerously" }).window;
        appendScript(window, { makeStacksBadge, makeBling, makeStacksIcon });
    });

    it("should correctly generate badges", () => {
        const badge = window.makeStacksBadge as typeof makeStacksBadge;
        const icon = window.makeStacksIcon as typeof makeStacksIcon;

        (
          [
              /* Default */
              { blingColor: "gold", text: "Great Question" },
              { blingColor: "silver", text: "Favorite Question" },
              { blingColor: "bronze", text: "Altruist" },

              /* Badge counts */
              { type: ["gold"], blingColor: "gold", text: "635" },
              { type: ["silver"], blingColor: "silver", text: "7624" },
              { type: ["bronze"], blingColor: "bronze", text: "8234" },

              /* Number counts */
              { type: ["bounty"], text: "+100" },
              { type: ["votes"], text: "38" },
              { type: ["answered"], text: "154" },
              { type: ["rep"], text: "+15" },
              { type: ["rep-down"], text: "-2" },
              { type: ["important"], text: "99+" },

              /* Icon badges */
              {
                  type: ["icon"],
                  text: "Filtered",
                  icon: icon(
                      "iconFilter",
                      "M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z",
                      { width: 18 }
                  )[0]
              },

              /* Badge states */
              {
                  type: ["icon", "info"],
                  text: "Draft",
                  icon: icon(
                      "iconEyeOffSm",
                      "M3.52 7.38 1.58 9.26A12.38 12.38 0 0 1 0 7s2.63-5.14 7.05-5.14c.66 0 1.28.12 1.86.32L7.44 3.6a3.48 3.48 0 0 0-3.92 3.78ZM5.3 9.99c.5.28 1.1.44 1.71.44 1.94 0 3.5-1.53 3.5-3.43 0-.62-.17-1.21-.47-1.72L8.7 6.6a1.73 1.73 0 0 1-2.08 2.07L5.29 10Zm6.23-6.19A12.7 12.7 0 0 1 14 7s-2.63 5.14-6.95 5.14A6.1 6.1 0 0 1 4 11.3L2.27 13l-1.4-1.36L11.9 1l1.23 1.2-1.6 1.6Z"
                  )[0]
              },
              {
                  type: ["icon", "warning"],
                  text: "Review",
                  icon: icon(
                      "iconLockSm",
                      "M3.5 5C2.67 5 2 5.67 2 6.5v5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5v-.5a3.5 3.5 0 1 0-7 0V5Zm1.4 0v-.5a2.1 2.1 0 1 1 4.2 0V5H4.9Zm3.6 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  )[0]
              },
              {
                  type: ["icon", "muted"],
                  text: "Archived",
                  icon: icon(
                      "iconArchiveSm",
                      "M1 3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H1Zm11 1H2v7c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4ZM4.5 6h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z"
                  )[0]
              },
              {
                  type: ["icon", "danger"],
                  text: "Closed",
                  icon: icon(
                      "iconNotInterestedSm",
                      "M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Zm-2 0c0-.74-.2-1.44-.56-2.03l-5.47 5.47A4 4 0 0 0 11 7ZM3.56 9.03l5.47-5.47a4 4 0 0 0-5.48 5.48Z"
                  )[0]
              },

              /* Filled badges */
              {
                  type: ["icon", "muted", "filled"],
                  text: "Pinned",
                  icon: icon(
                      "iconTackSm",
                      "M5.3 10.3 8 13c1.08-1.08 1.32-3.67.58-5.4l1.6-1.68c1.05.29 2.5-.1 3.34-.93.2-.19.35-.4.48-.63L9.65 0C9.42.13 9.2.3 9 .5a4.04 4.04 0 0 0-.93 3.48L6.4 5.65C4.62 4.8 2.53 4.61 1 6l2.7 2.7-2.5 2.6L0 14l2.7-1.2 2.6-2.5Z"
                  )[0]
              },
              {
                  type: ["icon", "danger", "filled"],
                  text: "Deleted",
                  icon: icon(
                      "iconTrashSm",
                      "M11 2a1 1 0 0 1 1 1v1H2V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h2Zm0 3H3v6c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V5Z"
                  )[0]
              },

              /* User badges */
              { type: ["admin"], text: "Admin" },
              { type: ["admin"], size: "sm", text: "Admin" },
              { type: ["admin"], size: "xs", text: "Admin" },
              { type: ["moderator"], text: "Moderator" },
              { type: ["moderator"], size: "sm", text: "Mod" },
              { type: ["moderator"], size: "xs", text: "Mod" },
              { type: ["staff"], text: "Staff" },
              { type: ["staff"], size: "sm", text: "Staff" },
              { type: ["staff"], size: "xs", text: "Staff" },

              /* Badge sizes */
              { text: "Regular" },
              { text: "Small", size: "sm" },
              { text: "Extra small", size: "xs" }
          ] as StacksBadgesOptions[]
        ).forEach((data, index) => {
            const el = badge(data);

            expect(el.outerHTML).to.equal(badges[index].outerHTML);
        });
    });
});