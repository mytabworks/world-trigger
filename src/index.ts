export type TriggerType<P = any> = Record<string, Array<(data: P) => void>>

const worldTriggers: TriggerType = {}

export const addTrigger = <P = any>(name: string, callback: (data: P) => void) => {
    if(Array.isArray(worldTriggers[name])) {
        worldTriggers[name] = [...worldTriggers[name], callback]
    } else {
        worldTriggers[name] = [callback]
    }
}

export const removeTrigger = <P = any>(name: string, callback: (data: P) => void) => {
    if(Array.isArray(worldTriggers[name]) && worldTriggers[name].length > 1) {
        worldTriggers[name] = worldTriggers[name].filter(each => each !== callback)
    } else {
        delete worldTriggers[name]
    }
}

export const dispatchTrigger = <P = any>(name: string, data?: P) => {
    if(Array.isArray(worldTriggers[name])) {
        worldTriggers[name].forEach(callback => callback(data))
    }
}

export default class worldTrigger {
    static addTrigger = addTrigger
    static removeTrigger = removeTrigger
    static dispatchTrigger = dispatchTrigger
}