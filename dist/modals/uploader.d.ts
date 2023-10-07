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
export declare const makeStacksUploader: (id: string, label: string, options: StacksUploaderOptions) => HTMLDivElement;
