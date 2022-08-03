Passes if the Date instance represents a time at or before the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() + 10 * 1000);
expect(dateA, 'to be same or before', dateB);
```

When the assertion fails you'll get this output:

```js
var dateA = new Date(Date.UTC(2010, 10, 10));
var dateB = new Date(dateA.getTime() - 10 * 1000);
expect(dateA, 'to be same or before', dateB);
```

```output
expected new Date('2010-11-10T00:00:00Z')
to be same or before new Date('2010-11-09T23:59:50Z')
```
