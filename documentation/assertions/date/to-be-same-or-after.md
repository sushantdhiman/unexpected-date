Passes if the Date instance represents a time at or later than the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() - 10 * 1000);
expect(dateA, 'to be same or after', dateB);
```

When the assertion fails you'll get this output:

```js
var dateA = new Date(Date.UTC(2010, 10, 10));
var dateB = new Date(dateA.getTime() + 10 * 1000);
expect(dateA, 'to be same or after', dateB);
```

```output
expected new Date('2010-11-10T00:00:00Z')
to be same or after new Date('2010-11-10T00:00:10Z')
```
