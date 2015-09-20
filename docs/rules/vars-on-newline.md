# Require vars to on new line (vars-on-new)

Some coding practices want each variable to be declared on a separate line. It make the code more readable also help to identify all the variables very clearly.

## Rule Details

This rule checks to make sure each variable is on a new line. it checks for `var`, `let` and `const`.

The following patterns are considered warnings:

```js
var a, b, c;

var a = 2, b;

var a = 2; var b;

let a = 2, c,
    d = 2;
```

The following patterns are considered okay and do not cause warnings:

```js
var a,
    b,
    c;

var a = 2,
    b;

var a = 2;
var b;

let a = 2,
    c,
    d = 2;
```

## When Not To Use It

If you dont want to have the variables to be declared on a new line.
