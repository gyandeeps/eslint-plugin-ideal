/**
 * @fileoverview Check to see all the variable declarations have a default value
 * @author Gyandeep Singh
 */

"use strict";

module.exports = function(context){
    return {
        VariableDeclaration: function(node){
            node.declarations.forEach(function(elem){
                if(!elem.init){
                    context.report(elem, "Variable `" + elem.id.name + "` has no default value.");
                }
            });
        }
    };
};
