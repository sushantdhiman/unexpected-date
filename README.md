# Unexpected-date

[![NPM version](https://badge.fury.io/js/unexpected-date.svg)](https://www.npmjs.com/package/unexpected-date)
[![Node.js CI](https://github.com/sushantdhiman/unexpected-date/actions/workflows/ci.yml/badge.svg)](https://github.com/sushantdhiman/unexpected-date/actions/workflows/ci.yml)

Support for useful date/time assertions for
[Unexpected.js](https://github.com/unexpectedjs/unexpected)

## Table of Contents

- [Why](#why)
- [Installation](#installation)
- [Documentation](#documentation)
- [Notes](#notes)

## Why

Use this module if you are looking for

- Assertions on native [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) objects
- Dependency free light-weight module

## Installation

You will need `unexpected@10.32.0` or above to use this module.

### Node.js

```
$ npm install --save-dev unexpected-date
$ yarn add --dev unexpected-date
```

```javascript
var expect = require("unexpected").clone();
expect.use(require("unexpected-date"));
```

## Documentation

Checkout documentation site [here](http://sushantdhiman.com/projects/unexpected-date/)

### Assertions Available

- `to be after`
- `to be before`
- `to be [inclusively] between`
- `to be close to`
- `to be same or after`
- `to be same or before`
- `to equal date`
- `to equal time`

## Notes

This module is inspired from [unexpected-moment](https://github.com/unexpectedjs/unexpected-moment) assertions.
