/**
 * @fileoverview Test file for vars-with-default rule
 * @author Gyandeep Singh
 */
"use strict";

var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();
var rule = require("../../lib/rules/vars-with-default");

ruleTester.run("vars-with-default", rule, {
    valid: [
        "var a = 1;",
        {
            code: "function foo() { let a = 1; const b = false; var c = true; }",
            ecmaFeatures: {
                blockBindings: true
            }
        }
    ],

    invalid: [
        {
            code: "var a",
            errors: [{
                message: "Variable `a` has no default value.",
                line: 1,
                column: 5
            }]
        },
        {
            code: "var a = 2, b;",
            errors: [{
                message: "Variable `b` has no default value.",
                line: 1,
                column: 12
            }]
        },
        {
            code: "var a, b;",
            errors: [
                {
                    message: "Variable `a` has no default value.",
                    line: 1,
                    column: 5
                },
                {
                    message: "Variable `b` has no default value.",
                    line: 1,
                    column: 8
                }
            ]
        },
        {
            code: "function foo() { let a; \nconst b = false; \nvar c; }",
            ecmaFeatures: {
                blockBindings: true
            },
            errors: [
                {
                    message: "Variable `a` has no default value.",
                    line: 1,
                    column: 22
                },
                {
                    message: "Variable `c` has no default value.",
                    line: 3,
                    column: 5
                }
            ]
        }
    ]
});
