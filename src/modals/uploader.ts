import { makeStacksButton } from "../buttons/index";
import type { StacksCommonOptions } from "../index";

export type StacksUploaderOptions = StacksCommonOptions & {
    inputClasses?: string[];
    onReset: (ev: MouseEvent, val: FileList | null) => void | Promise<void>;
    onUpload: (ev: MouseEvent, val: FileList | null) => void | Promise<void>;
    resetButtonClasses?: string[];
    resetter: [id: string, text: string];
    state?: "error" | "success" | "warning";
    uploadButtonClasses?: string[];
    uploader: [id: string, text: string];
};

/**
 * @see https://stackoverflow.design/product/components/uploader/
 *
 * @summary builds a Stacks uploader
 * @param id uploader element id
 * @param label uploader label text
 * @param options uploader configuration
 */
export const makeStacksUploader = (
    id: string,
    label: string,
    options: StacksUploaderOptions
) => {
    const {
        classes = [],
        inputClasses = [],
        resetter,
        onReset,
        onUpload,
        resetButtonClasses = [],
        state,
        uploadButtonClasses = [],
        uploader,
    } = options;

    const upl = document.createElement("div");

    const lbl = document.createElement("label");
    lbl.classList.add("d-block", "s-label", "mb4");
    lbl.htmlFor = id;
    lbl.textContent = label;

    const wrap = document.createElement("div");
    wrap.classList.add(...classes);
    wrap.dataset.controller = "s-uploader";

    const inputWrap = document.createElement("div");
    inputWrap.classList.add("s-uploader", "mb24", "wmx3");
    inputWrap.dataset.target = "s-uploader.uploader";

    if (state) {
        inputWrap.classList.add(`has-${state}`);
    }

    const input = document.createElement("input");
    input.classList.add("s-uploader--input", ...inputClasses);
    input.dataset.action = "input->s-uploader#handleInput";
    input.id = id;
    input.setAttribute("data-s-uploader-target", "input");
    input.type = "file";

    const previews = document.createElement("div");
    previews.classList.add("s-uploader--previews", "d-none");
    previews.dataset.target = "s-uploader.previews";
    previews.toggleAttribute("data-s-uploader-show-on-input");

    const actionWrap = document.createElement("div");

    const uploadBtn = makeStacksButton(...uploader, {
        classes: ["s-btn", "s-btn__primary"],
    });
    uploadBtn.addEventListener("click", (event) => onUpload(event, input.files));
    uploadBtn.classList.add(...uploadButtonClasses);
    uploadBtn.disabled = true;
    uploadBtn.toggleAttribute("data-s-uploader-enable-on-input");

    const resetBtn = makeStacksButton(...resetter, {
        classes: ["s-btn", "d-none"],
    });
    resetBtn.classList.add(...resetButtonClasses);
    resetBtn.dataset.action = "click->s-uploader#reset";
    resetBtn.addEventListener("click", (event) => onReset(event, input.files));
    resetBtn.toggleAttribute("data-s-uploader-show-on-input");

    actionWrap.append(uploadBtn, resetBtn);
    wrap.append(inputWrap, actionWrap);
    inputWrap.append(input, previews);
    upl.append(lbl, wrap);
    return upl;
};
