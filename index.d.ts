declare module "@ppzp/noty";
declare module "@ppzp/noty/noty.js";
declare module '@ppzp/noty/animation/index.js';
declare module '@ppzp/noty/content/index.js';

declare var noty: notyJs.noty;
declare function Noty(options: notyJs.notyOptions): notyJs.noty;

declare namespace notyJs {
    interface notyOptions {
        rootClass?: string;
        customPosition?: boolean;
        mount?: HTMLElement;
        Content?: Content;
        Animation?: Animation;
        duration?: number;
    }

    interface createContentHTMLElement {
        (text: string, options?: ContentOptions): HTMLElement;
    }

    interface ContentOptions {
        duration?: number;
        onClose?: () => void;
        closeBtn?: boolean;
    }

    interface Content {
        [method: string]: createContentHTMLElement;
    }

    interface createCCZAnimationOptions {
        duration?: number;
    }

    interface createCCZAnimation {
        (options?: createCCZAnimationOptions): Animation;
    }

    interface Animation {
        show: (content: Content, container?: HTMLElement) => void;
        close: (content: Content, container?: HTMLElement) => void;
    }

    interface notyContent {
        root: HTMLElement;
        content: HTMLElement;
        duration: number;
        onClose: () => void;
        close: () => void;
        closed: () => boolean;
        timeoutID: number;
    }

    interface notyFunction {
        (text: string, options?: ContentOptions): notyContent;
    }

    interface noty {
        [method: string]: notyFunction;
    }
}

