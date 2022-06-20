"use strict";
exports.__esModule = true;
var sample_root_1 = require("./modules/sample-root");
var graph_components_1 = require("./core/util/make/graph-components");
var state_config_1 = require("./state/state-config");
var prelaunch_tests_1 = require("./prelaunch-tests");
/*
 * Define your config here. This should have a reference to your root module, starting convoSegment path,
 * and initial state. If you will be using state variables, you can edit the state config in ./state/state-config.ts
 */
//// TODO: Start editing from here
var rootModule = sample_root_1.root;
var usePreLaunchTests = true;
var startingConvoSegmentPath = (0, graph_components_1.absoluteConvoSegmentPath)(['root', '/start']);
///// Stop editing. Don't change anything below this
var storytellerContentConfigurations = {
    rootModule: rootModule,
    initialState: state_config_1.initialState,
    startingConvoSegmentPath: startingConvoSegmentPath
};
if (usePreLaunchTests) {
    (0, prelaunch_tests_1.runPrelanchTests)(storytellerContentConfigurations);
}
exports["default"] = storytellerContentConfigurations;
