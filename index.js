/**
 * @fileoverview Expose out ESLint rules for this plugin.
 * @author Gyandeep Singh
 */

"use strict";

module.exports = {
    rules: {
        "no-tabs-in-file": require("./lib/rules/no-tabs-in-file"),
        "vars-with-default": require("./lib/rules/no-tabs-in-file")
    },
    rulesConfig: {
        "no-tabs-in-file": 2,
        "vars-with-default": 2
    }
};
