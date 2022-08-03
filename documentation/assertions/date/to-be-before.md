Passes if the Date instance represents a time earlier than the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() + 10 * 1000);
expect(dateA, 'to be before', dateB);
```

When the assertion fails you'll get this output:

```js
expect(
  new Date(Date.UTC(2010, 10, 10, 0, 0, 10)),
  'to be before',
  new Date(Date.UTC(2010, 10, 10, 0, 0, 0))
);
```

```output
expected new Date('2010-11-10T00:00:10Z')
to be before new Date('2010-11-10T00:00:00Z')
```
