import type { StacksCommonOptions } from "../index";
export declare type StacksUploaderOptions = StacksCommonOptions & {
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
export declare const makeStacksUploader: (id: string, label: string, options: StacksUploaderOptions) => HTMLDivElement;
