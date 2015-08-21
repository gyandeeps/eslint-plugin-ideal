/**
 * @fileoverview Rule to check for tabs inside a file
 * @author Gyandeep Singh
 */

"use strict";

module.exports = function(context){
    return {
        Program: function(node){
            var regex = /\t/;

            if(regex.test(context.getSource())){
                context.report(node, "File contains tabs.");
            }
        }
    };
};
