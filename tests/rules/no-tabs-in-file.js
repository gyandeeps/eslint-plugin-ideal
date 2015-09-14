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
var rule = require("../../index").rules["no-tabs-in-file"];

var ERROR_MESSAGE = "Line has tabs.";

ruleTester.run("no-tabs-in-file", rule, {
    valid: [
        "function test(){\n}"
    ],

    invalid: [
        {
            code: "function test(){\t}",
            errors: [{
                message: ERROR_MESSAGE,
                line: 1,
                column: 18
            }]
        },
        {
            code: "function test(){\n" +
            "  //\tsdfdsf \n" +
            "}",
            errors: [{
                message: ERROR_MESSAGE,
                line: 2,
                column: 6
            }]
        },
        {
            code: "function test(){\n" +
            "  //\tsdfdsf \n" +
            "\t}",
            errors: [
                {
                    message: ERROR_MESSAGE,
                    line: 2,
                    column: 6
                },
                {
                    message: ERROR_MESSAGE,
                    line: 3,
                    column: 2
                }
            ]
        }
    ]
});
