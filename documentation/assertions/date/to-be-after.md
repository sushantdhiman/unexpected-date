Passes if the Date instance represents a time later than the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() - 10 * 1000);
expect(dateA, 'to be after', dateB);
```

When the assertion fails you'll get this output:

```js
expect(
  new Date(Date.UTC(2010, 10, 10, 0, 0, 0)),
  'to be after',
  new Date(Date.UTC(2010, 10, 10, 0, 0, 10))
);
```

```output
expected new Date('Wed, 10 Nov 2010 00:00:00 GMT')
to be after new Date('Wed, 10 Nov 2010 00:00:10 GMT')
```
