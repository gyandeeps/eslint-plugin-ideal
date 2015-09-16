/**
 * @fileoverview Expose out ESLint rules for this plugin.
 * @author Gyandeep Singh
 */

"use strict";

module.exports = {
    rules: {
        "no-tabs-in-file": require("./lib/rules/no-tabs-in-file"),
        "vars-with-default": require("./lib/rules/vars-with-default"),
        "vars-on-newline": require("./lib/rules/vars-on-newline")
    },
    rulesConfig: {
        "no-tabs-in-file": 2,
        "vars-with-default": 2,
        "vars-on-newline": 2
    }
};
