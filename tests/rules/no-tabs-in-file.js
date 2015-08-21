/**
 * @fileoverview Expose out ESLint rules for this plugin.
 * @author Gyandeep Singh
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();
var rule = require("../../lib/rules/no-tabs-in-file");

var ERROR_MESSAGE = "File contains tabs.";

ruleTester.run("no-eval", rule, {
    valid: [
        "function test(){\n}"
    ],

    invalid: [
        {
            code: "function test(){\t}",
            errors: [{
                message: ERROR_MESSAGE
            }]
        },
        {
            code: "function test(){\n" +
            "  //\tsdfdsf \n" +
            "}",
            errors: [{
                message: ERROR_MESSAGE
            }]
        }
    ]
});
