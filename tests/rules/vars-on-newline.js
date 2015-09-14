/**
 * @fileoverview Test file for vars-on-newline rule
 * @author Gyandeep Singh
 */
"use strict";

var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();
var rule = require("../../index").rules["vars-on-newline"];

ruleTester.run("vars-on-newline", rule, {
    valid: [
        "var a = 1,\nb = 1;",
        "var a,\nb;",
        {
            code: "let a = 1, \n b = 2;",
            ecmaFeatures: {
                blockBindings: true
            }
        }
    ],

    invalid: [
        {
            code: "var a, b",
            errors: [{
                message: "Variable `b` should be on a new line.",
                line: 1,
                column: 8
            }],
            output: "var a, \nb"
        },
        {
            code: "var a = 2, b = 2;",
            errors: [{
                message: "Variable `b` should be on a new line.",
                line: 1,
                column: 12
            }],
            output: "var a = 2, \nb = 2;"
        },
        {
            code: "var a, b, c;",
            errors: [
                {
                    message: "Variable `b` should be on a new line.",
                    line: 1,
                    column: 8
                },
                {
                    message: "Variable `c` should be on a new line.",
                    line: 1,
                    column: 11
                }
            ],
            output: "var a, \nb, \nc;"
        }
    ]
});
