"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeTrigger = exports.dispatchTrigger = exports["default"] = exports.addTrigger = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var worldTriggers = {};

var addTrigger = function addTrigger(name, callback) {
  if (Array.isArray(worldTriggers[name])) {
    worldTriggers[name] = [].concat(_toConsumableArray(worldTriggers[name]), [callback]);
  } else {
    worldTriggers[name] = [callback];
  }
};

exports.addTrigger = addTrigger;

var removeTrigger = function removeTrigger(name, callback) {
  if (Array.isArray(worldTriggers[name]) && worldTriggers[name].length > 1) {
    worldTriggers[name] = worldTriggers[name].filter(function (each) {
      return each !== callback;
    });
  } else {
    delete worldTriggers[name];
  }
};

exports.removeTrigger = removeTrigger;

var dispatchTrigger = function dispatchTrigger(name, data) {
  if (Array.isArray(worldTriggers[name])) {
    worldTriggers[name].forEach(function (callback) {
      return callback(data);
    });
  }
};

exports.dispatchTrigger = dispatchTrigger;
var _default = {
  addTrigger: addTrigger,
  removeTrigger: removeTrigger,
  dispatchTrigger: dispatchTrigger
};
exports["default"] = _default;