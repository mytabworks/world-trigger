const worldTriggers = {};
export const addTrigger = (name, callback) => {
  if (Array.isArray(worldTriggers[name])) {
    worldTriggers[name] = [...worldTriggers[name], callback];
  } else {
    worldTriggers[name] = [callback];
  }
};
export const removeTrigger = (name, callback) => {
  if (Array.isArray(worldTriggers[name]) && worldTriggers[name].length > 1) {
    worldTriggers[name] = worldTriggers[name].filter(each => each !== callback);
  } else {
    delete worldTriggers[name];
  }
};
export const dispatchTrigger = (name, data) => {
  if (Array.isArray(worldTriggers[name])) {
    worldTriggers[name].forEach(callback => callback(data));
  }
};
export default {
  addTrigger,
  removeTrigger,
  dispatchTrigger
};