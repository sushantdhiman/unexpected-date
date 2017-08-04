# Unexpected-date

[![NPM version](https://badge.fury.io/js/unexpected-date.svg)](http://badge.fury.io/js/unexpected-date)
[![Build Status](https://travis-ci.org/sushantdhiman/unexpected-date.svg?branch=master)](https://travis-ci.org/sushantdhiman/unexpected-date)
[![Coverage Status](https://coveralls.io/repos/sushantdhiman/unexpected-date/badge.svg)](https://coveralls.io/r/sushantdhiman/unexpected-date)
[![Dependency Status](https://david-dm.org/sushantdhiman/unexpected-date.svg)](https://david-dm.org/sushantdhiman/unexpected-date)

Add support for useful date/time assertions to
[Unexpected.js](https://github.com/unexpectedjs/unexpected)

## Table of Contents

- [Why](#why)
- [Installation](#installation)
- [Documentation](#documentation)
- [Notes](#notes)

## Why 

You can use this module if you are looking for

- Assertions on native [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) objects
- Dependency free light-weight module
- Browser support

## Installation

You will need `unexpected@10.32.0` or above to use this module.

### Node.js

```
$ npm install --save-dev unexpected-date
$ yarn add --dev unexpected-date
```

```javascript
var expect = require('unexpected').clone();
expect.use(require('unexpected-date'));
```

### Browser

Include `unexpected-date.min.js` from root directory of this repository.

```html
<script src="unexpected.js"></script>
<script src="unexpected-date.min.js"></script>
```

This will expose the expect function under the following namespace:

```javascript
var expect = weknowhow.expect.clone();
expect.use(unexpectedDate);
```

## Documentation

You can find more detailed docs [here](http://sushantdhiman.com/projects/unexpected-date/)

### Assertions Available

- `to be after`
- `to be before`
- `to be [inclusively] between`
- `to be same or after`
- `to be same or before`
- `to equal date`
- `to equal time`

## Notes

This module is inspired from [Unexpected Moment](https://github.com/unexpectedjs/unexpected-moment) assertions.