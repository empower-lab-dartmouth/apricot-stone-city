"use strict";
exports.__esModule = true;
exports.runPrelanchTests = void 0;
var path_validity_1 = require("./path-validity");
var Option_1 = require("fp-ts/lib/Option");
var logging_1 = require("../core/util/logging");
function runPrelanchTests(config) {
    // update this to do a mapping across multiple test results, we don't want the tests to short circuit
    var maybeError = (0, path_validity_1.allPathsAreValid)(config);
    if ((0, Option_1.isSome)(maybeError)) {
        throw maybeError.value;
    }
    logging_1["default"].debug("All pre launch tests pass! Hooray!");
}
exports.runPrelanchTests = runPrelanchTests;
