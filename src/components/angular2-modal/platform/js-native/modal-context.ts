import {ModalOpenContextBuilder, ModalOpenContext} from '../../models/modal-open-context';
import {FluentAssignMethod} from './../../framework/fluent-assign';
import {arrayUnion} from './../../framework/utils';

const DEFAULT_SETTERS = [
    'promptDefault'
];

export enum JS_NATIVE_DIALOG_TYPE {
    alert,
    prompt,
    confirm
}

export class JSNativeModalContext extends ModalOpenContext {
    promptDefault: string;
    dialogType: JS_NATIVE_DIALOG_TYPE;

    normalize(): void {
        if (!this.message) this.message = '';
        if (this.dialogType === undefined) this.dialogType = JS_NATIVE_DIALOG_TYPE.alert;
    }
}


export class JSNativeModalContextBuilder<T extends JSNativeModalContext>
                                                                extends ModalOpenContextBuilder<T> {

    constructor(
        defaultValues: T = undefined,
        initialSetters: string[] = undefined,
        baseType: new () => T = undefined
    ) {
        super(
            defaultValues || <any>{},
            arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
            baseType || <any>JSNativeModalContext 
            // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }

    /**
     * The default value for the prompt input
     */
    promptDefault: FluentAssignMethod<string, this>;
}

