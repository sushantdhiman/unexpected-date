Asserts that the difference between two dates is less than a given epsilon in milliseconds. Epsilon defaults to 1 second (1000ms) if omitted.

```js
var date = new Date();
expect(date, 'to be close to', new Date());
expect(date, 'not to be close to', new Date(Date.UTC(2010, 10, 10)));
```

When the assertion fails you'll get this output:

```js
var date = new Date(Date.UTC(2010, 10, 1));
expect(date, 'to be close to', new Date(Date.UTC(2010, 10, 10)), 20000);
```

```output
expected new Date('2010-11-01T00:00:00Z')
to be close to new Date('2010-11-10T00:00:00Z') (epsilon: 2e+4)
```
