export type TriggerType<P = any> = Record<string, Array<(data: P) => void>>;
export const addTrigger: <P = any>(name: string, callback: (data: P) => void) => void;
export const removeTrigger: <P = any>(name: string, callback: (data: P) => void) => void;
export const dispatchTrigger: <P = any>(name: string, data?: P) => void;
export default class worldTrigger {
    static addTrigger: <P = any>(name: string, callback: (data: P) => void) => void;
    static removeTrigger: <P = any>(name: string, callback: (data: P) => void) => void;
    static dispatchTrigger: <P = any>(name: string, data?: P) => void;
}
export default worldTrigger;

//# sourceMappingURL=index.d.ts.map
