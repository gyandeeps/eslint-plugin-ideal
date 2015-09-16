# Disallow tabs in file (no-tabs-in-file)

Some people prefer whitespaces instead of tab characters in file. So they would want to disallow tab anywhere inside a file including comments.

## Rule Details

This rule looks for tabs inside the file. It can abe anywhere inside code or comments or anything.

The following patterns are considered warnings:

```js
var a /t= 2;

/**
* /t/t its a test function
*/
function test(){}

var x = 1; // /t test
```

The following patterns are considered okay and do not cause warnings:

```js
var a = 2;

/**
* its a test function
*/
function test(){}

var x = 1; // test
```

## When Not To Use It

If you have established a standard where having tabs is fine.
