# Require vars to be initialized (vars-with-default)

Some coding practices want all the variables to be initialized when they are declared usually with default values. Its considered a good practice because it establishes a standard on a variables behalf to say what kind it is.

## Rule Details

This rule checks to make sure all the variables are initialized. it checks for `var`, `let` and `const`.

The following patterns are considered warnings:

```js
var a;

var a, b;

let a;
```

The following patterns are considered okay and do not cause warnings:

```js
var a = 1;

var a = 2, b = 3;

let a = 1;
```

## When Not To Use It

If you dont want to have the variables initialized when they are declared.
