declare module 'world-trigger';
export declare type TriggerType<P = any> = Record<string, Array<(data: P) => void>>;
export declare const addTrigger: <P = any>(name: string, callback: (data: P) => void) => void;
export declare const removeTrigger: <P = any>(name: string, callback: (data: P) => void) => void;
export declare const dispatchTrigger: <P = any>(name: string, data?: P | undefined) => void;
declare const _default: {
    addTrigger: <P = any>(name: string, callback: (data: P) => void) => void;
    removeTrigger: <P_1 = any>(name: string, callback: (data: P_1) => void) => void;
    dispatchTrigger: <P_2 = any>(name: string, data?: P_2 | undefined) => void;
};
export default _default;
