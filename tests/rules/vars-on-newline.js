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
        "var a = function(){ \nvar b;\n};",
        "var a = 1,\nb = 1;",
        "var a,\nb;",
        "var a; \nvar b;",
        {
            code: "let a = 1, \n b = 2;",
            ecmaFeatures: {
                blockBindings: true
            }
        }
    ],

    invalid: [
        {
            code:
                "var a;\n" +
                "var b;\n" +
                "if(true){\n" +
                "    var x = 1; var b = 2;\n" +
                "    x = 3;\n" +
                "}",
            errors: [{
                message: "Variable `b` should be on a new line.",
                line: 4,
                column: 20
            }]
        },
        {
            code: "var a; var b",
            errors: [{
                message: "Variable `b` should be on a new line.",
                line: 1,
                column: 12
            }]
        },
        {
            code: "var a, b",
            errors: [{
                message: "Variable `b` should be on a new line.",
                line: 1,
                column: 8
            }]
        },
        {
            code: "var a = 2, b = 2;",
            errors: [{
                message: "Variable `b` should be on a new line.",
                line: 1,
                column: 12
            }]
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
            ]
        }
    ]
});
