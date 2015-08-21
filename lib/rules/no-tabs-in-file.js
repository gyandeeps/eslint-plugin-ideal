/**
 * @fileoverview Rule to check for tabs inside a file
 * @author Gyandeep Singh
 */

"use strict";

module.exports = function(context){
    return {
        Program: function(node){
            var regex = /\t/;
            var lines = context.getSourceLines();

            lines.forEach(function(line, index){
                var match = regex.exec(line);

                if(match){
                    context.report(node, {line: index + 1, column: match.index + 1}, "Line has tabs.");
                }
            });
        }
    };
};
