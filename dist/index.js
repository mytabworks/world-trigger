
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "addTrigger", function () { return $091c930e13b125ed$export$44e08e95db91f0b7; });
$parcel$export(module.exports, "removeTrigger", function () { return $091c930e13b125ed$export$fe531c183f379543; });
$parcel$export(module.exports, "dispatchTrigger", function () { return $091c930e13b125ed$export$c1a102c7e046df1c; });
$parcel$export(module.exports, "default", function () { return $091c930e13b125ed$export$2e2bcd8739ae039; });
const $091c930e13b125ed$var$worldTriggers = {};
const $091c930e13b125ed$export$44e08e95db91f0b7 = (name, callback)=>{
    if (Array.isArray($091c930e13b125ed$var$worldTriggers[name])) $091c930e13b125ed$var$worldTriggers[name] = [
        ...$091c930e13b125ed$var$worldTriggers[name],
        callback
    ];
    else $091c930e13b125ed$var$worldTriggers[name] = [
        callback
    ];
};
const $091c930e13b125ed$export$fe531c183f379543 = (name, callback)=>{
    if (Array.isArray($091c930e13b125ed$var$worldTriggers[name]) && $091c930e13b125ed$var$worldTriggers[name].length > 1) $091c930e13b125ed$var$worldTriggers[name] = $091c930e13b125ed$var$worldTriggers[name].filter((each)=>each !== callback);
    else delete $091c930e13b125ed$var$worldTriggers[name];
};
const $091c930e13b125ed$export$c1a102c7e046df1c = (name, data)=>{
    if (Array.isArray($091c930e13b125ed$var$worldTriggers[name])) $091c930e13b125ed$var$worldTriggers[name].forEach((callback)=>callback(data));
};
class $091c930e13b125ed$var$worldTrigger {
    static #_ = this.addTrigger = $091c930e13b125ed$export$44e08e95db91f0b7;
    static #_1 = this.removeTrigger = $091c930e13b125ed$export$fe531c183f379543;
    static #_2 = this.dispatchTrigger = $091c930e13b125ed$export$c1a102c7e046df1c;
}
var $091c930e13b125ed$export$2e2bcd8739ae039 = $091c930e13b125ed$var$worldTrigger;


//# sourceMappingURL=index.js.map
