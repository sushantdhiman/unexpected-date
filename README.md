# Unexpected-date

[![NPM version](https://badge.fury.io/js/unexpected-date.svg)](http://badge.fury.io/js/unexpected-date)
[![Build Status](https://travis-ci.org/sushantdhiman/unexpected-date.svg?branch=master)](https://travis-ci.org/sushantdhiman/unexpected-date)
[![Coverage Status](https://coveralls.io/repos/sushantdhiman/unexpected-date/badge.svg)](https://coveralls.io/r/sushantdhiman/unexpected-date)
[![Dependency Status](https://david-dm.org/sushantdhiman/unexpected-date.svg)](https://david-dm.org/sushantdhiman/unexpected-date)

![Unexpected date :)](documentation/unexpectedDate.png)

This module extends the
[Unexpected](https://github.com/unexpectedjs/unexpected) assertion
library to support date/time assertions.

```js
var dateA = new Date(Date.UTC(2010, 10, 11, 0, 0, 0));
var dateB = new Date(Date.UTC(2010, 10, 10, 0, 0, 0));
expect(dateA, 'to be same or before', dateB);
```

```output
expected new Date('Thu, 11 Nov 2010 00:00:00 GMT')
to be same or before new Date('Wed, 10 Nov 2010 00:00:00 GMT')
```

## Install

### Node

```
$ npm install unexpected unexpected-date
```

Then:

```js#evaluate:false
var expect = require('unexpected').clone();
expect.use(require('unexpected-date'));
```

### Browser

Include `unexpected-date.min.js` from root directory of this repository.

```html
<script src="moment.js"></script>
<script src="unexpected.js"></script>
<script src="unexpected-date.min.js"></script>
```

this will expose the expect function under the following namespace:

```js#evaluate:false
var expect = weknowhow.expect.clone();
expect.use(unexpectedDate);
```

## Assertions

- [<date> [not] to be after <date>](documentation/assertions/date/to-be-after.md)
- [<date> [not] to be before <date>](documentation/assertions/date/to-be-before.md)
- [<date> [not] to equal time <date>](documentation/assertions/date/to-equal-time.md)
- [<date> [not] to equal date <date>](documentation/assertions/date/to-equal-date.md)
- [<date> [not] to be same or after <date>](documentation/assertions/date/to-be-same-or-after.md)
- [<date> [not] to be same or before <date>](documentation/assertions/date/to-be-same-or-between.md)
- [<date> [not] to be between <date> <date>](documentation/assertions/date/to-be-between.md)
