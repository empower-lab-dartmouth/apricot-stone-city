"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.evaluateFilePath = exports.evaluateNumber = exports.evaluateCondition = exports.evaluateText = exports.evaluateStateUpdate = exports.noDuplicates = exports.concatArraysReducer = exports.onError = exports.getNominalValue = void 0;
var Either_1 = require("fp-ts/lib/Either");
var logging_1 = require("./logging");
var Either_2 = require("fp-ts/lib/Either");
function getNominalValue(nominal) {
    return nominal;
}
exports.getNominalValue = getNominalValue;
function onError(message, defaultReturnValue) {
    return function (error) {
        logging_1["default"].trace("".concat(message, "\nError: ").concat(error));
        return defaultReturnValue;
    };
}
exports.onError = onError;
function concatArraysReducer(accumulator, current) {
    return __spreadArray(__spreadArray([], accumulator, true), current, true);
}
exports.concatArraysReducer = concatArraysReducer;
function noDuplicates(arr) {
    return Array.from(new Set(arr));
}
exports.noDuplicates = noDuplicates;
function evaluateExpression(expression, onError, stateInstance) {
    var generalErrorHandling = function (e) {
        return e instanceof Error ? e : new Error('unknown error');
    };
    var resultOrError = (0, Either_2.tryCatch)(function () {
        var test = expression.stateDependentResult(stateInstance);
        return expression.stateDependentResult(stateInstance);
    }, generalErrorHandling);
    var guarenteedResult = (0, Either_1.fold)(onError, function (val) { return val; })(resultOrError);
    return guarenteedResult;
}
var evaluateStateUpdate = function (stateUpdateExpression, onError, stateInstance) { return evaluateExpression(stateUpdateExpression, onError, stateInstance); };
exports.evaluateStateUpdate = evaluateStateUpdate;
var evaluateText = function (textExpression, onError, stateInstance) { return evaluateExpression(textExpression, onError, stateInstance); };
exports.evaluateText = evaluateText;
var evaluateCondition = function (conditionExpression, onError, stateInstance) { return evaluateExpression(conditionExpression, onError, stateInstance); };
exports.evaluateCondition = evaluateCondition;
var evaluateNumber = function (numberExpression, onError, stateInstance) { return evaluateExpression(numberExpression, onError, stateInstance); };
exports.evaluateNumber = evaluateNumber;
var evaluateFilePath = function (filepathExpression, onError, stateInstance) { return evaluateExpression(filepathExpression, onError, stateInstance); };
exports.evaluateFilePath = evaluateFilePath;
