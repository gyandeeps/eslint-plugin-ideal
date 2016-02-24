/**
 * @fileoverview Check to see all the variable declarations have a default value
 * @author Gyandeep Singh
 */

"use strict";

module.exports = function(context){
    var EXCEPTION_PARENT_TYPE = [
        "ForInStatement",
        "ForOfStatement"
    ];

    /**
     * True if the parent of node is
     * - ForInStatement
     * - ForOfStatement
     * @param {ASTNode} node - node to examine
     * @returns {Boolean} True if its an exception
     * @private
     */
    function isException(node){
        var parentType = node.parent.type;

        return EXCEPTION_PARENT_TYPE.indexOf(parentType) > -1;
    }

    return {
        VariableDeclaration: function(node){
            if(isException(node)){
                return;
            }
            node.declarations.forEach(function(elem){
                if(!elem.init){
                    context.report(elem, "Variable `" + elem.id.name + "` has no default value.");
                }
            });
        }
    };
};
