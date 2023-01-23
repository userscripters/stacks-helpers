import type { StacksCommonOptions } from "../index";
export type StacksUploaderOptions = StacksCommonOptions & {
    /** Classes applied to the upload input */
    inputClasses?: string[];
    /** Handler called when the reset button is clicked */
    onReset: (ev: MouseEvent, val: FileList | null) => void | Promise<void>;
    /** Handler called when the file has been uploaded */
    onUpload: (ev: MouseEvent, val: FileList | null) => void | Promise<void>;
    /** Classes applied to the Reset button */
    resetButtonClasses?: string[];
    /** Reset button configuaration */
    resetter: [id: string, text: string];
    /** The state of the uploader */
    state?: "error" | "success" | "warning";
    /** Classes applied to the upload button */
    uploadButtonClasses?: string[];
    /** Upload button configuration */
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
export declare const makeStacksUploader: (id: string, label: string, options: StacksUploaderOptions) => HTMLDivElement;
