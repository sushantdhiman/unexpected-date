---
template: default.ejs
theme: dark
title: unexpected-date
repository: https://github.com/sushantdhiman/unexpected-date
---

# Unexpected-date

![Unexpected date :)](unexpectedDate.jpg)

This module extends the
[Unexpected](https://github.com/unexpectedjs/unexpected) assertion
library to support native date/time assertions.

```js
var date = new Date(Date.UTC(2010, 10, 10, 0, 0, 0));
```

```output

```

[![NPM version](https://badge.fury.io/js/unexpected-date.svg)](http://badge.fury.io/js/unexpected-date)
[![Build Status](https://travis-ci.org/sushantdhiman/unexpected-date.svg?branch=master)](https://travis-ci.org/sushantdhiman/unexpected-date)
[![Coverage Status](https://coveralls.io/repos/sushantdhiman/unexpected-date/badge.svg)](https://coveralls.io/r/sushantdhiman/unexpected-date)
[![Dependency Status](https://david-dm.org/sushantdhiman/unexpected-date.svg)](https://david-dm.org/sushantdhiman/unexpected-date)

## How to use

### Node

Install it with NPM or add it to your `package.json`:

```
$ npm install unexpected unexpected-date
```

Then:

```js#evaluate:false
var expect = require('unexpected').clone();
expect.use(require('unexpected-date'));
```

### Browser

Include the `unexpected.js` found at the lib directory of this
repository.

```html
<script src="moment.js"></script>
<script src="unexpected.js"></script>
<script src="unexpected-date.js"></script>
```

this will expose the expect function under the following namespace:

```js#evaluate:false
var expect = weknowhow.expect.clone();
expect.use(moment.unexpectedDate);
```

### RequireJS

Include the library with RequireJS the following way:

```js#evaluate:false
define(['unexpected', 'unexpected-date'], funtion (unexpected, unexpectedDate) {
   var expect = unexpected.clone();
   expect.use(unexpectedDate);
   // Your code
});
```

## MIT License

The MIT License (MIT)

Copyright (c) 2017 Sushant Dhiman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
