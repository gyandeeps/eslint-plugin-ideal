/**
 * @fileoverview Check to see all the variable declarations to be on new line
 * @author Gyandeep Singh
 */

"use strict";

module.exports = function(context){

    function report(node){
        context.report({
            node: node,
            message: "Variable `" + node.id.name + "` should be on a new line.",
            fix: function(fixer){
                return fixer.insertTextBefore(node, "\n");
            }
        });
    }

    return {
        VariableDeclaration: function(node){
            node.declarations.reduce(function(lastVarEnd, elem){
                if(elem.loc.end.line <= lastVarEnd){
                    report(elem);
                }
                return elem.loc.end.line;
            }, -1);
        }
    };
};
