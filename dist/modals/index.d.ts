import { StacksCommonOptions } from "../index";
export type StacksModalOptions = StacksCommonOptions & {
    danger?: boolean;
    fullscreen?: boolean;
    celebratory?: boolean;
    title: {
        text: string | HTMLElement;
        id?: string;
        classes?: string[];
    };
    body: {
        bodyHtml: string | HTMLElement;
        id?: string;
        classes?: string[];
    };
    footer: {
        buttons: {
            element: HTMLButtonElement;
            hideOnClick?: boolean;
        }[];
        classes?: string[];
    };
};
export declare const makeStacksModal: (id: string, options: StacksModalOptions) => HTMLElement;
