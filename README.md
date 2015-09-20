[![NPM version](https://badge.fury.io/js/eslint-plugin-ideal.svg?style=flat-square)](http://badge.fury.io/js/eslint-plugin-ideal)
[![Build Status](https://travis-ci.org/gyandeeps/eslint-plugin-ideal.svg?branch=master)](http://travis-ci.org/gyandeeps/eslint-plugin-ideal)

eslint-plugin-ideal
====================

# How to use

## Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally

```sh

npm install eslint@">=1.0.0"

or

npm install eslint@">=1.0.0" --save-dev
```

eslint-plugin-ideal requires `ESLint` with version greater then 1.0.0 if you would like to use your own base models.

## Install ideal plugins.
If you installed `ESLint` globally, you have to install ideal plugin globally too. Otherwise, install it locally.

```bash

npm install eslint-plugin-ideal

or

npm install eslint-plugin-ideal --save-dev
```

## Default configuration

If you are using ESLint >0.9.0 then this plugin will provide default configuration. If you are fine with defaults, you do not need to update your .eslintrc file.

Defaults are currently set to the following:

```json
{
    "no-tabs-in-file": 2,
    "vars-with-default": 2,
    "vars-on-newline": 2
}
```

## Modify .eslintrc for your project

Add `plugins` section and specify eslint-plugin-backbone as a plugin

```json
{
    "plugins": [
        "ideal"
    ]
}
```

Enable all of the rules that you would like to use

```json

{
    "rules": {
        "ideal/no-tabs-in-file": 1,
        "ideal/vars-with-default": 1,
        "ideal/vars-on-newline": 1
    }
}
```

# List of supported rules

* [no-tabs-in-file](docs/rules/no-tabs-in-file.md)
* [vars-with-default](docs/rules/vars-with-default.md)
* [vars-on-newline](docs/rules/vars-on-newline.md)
