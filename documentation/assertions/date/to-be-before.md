Passes if the Date instance represents a time earlier than the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() + 10 * 1000);
expect(dateA, 'to be before', dateB);
```

When the assertion fails you'll get this output:

```js
var dateA = new Date(Date.UTC(2010, 10, 10));
var dateB = new Date(dateA.getTime() - 10 * 1000);
expect(dateA, 'to be before', dateB);
```

```output
expected new Date('Wed, 10 Nov 2010 00:00:00 GMT')
to be before new Date('Tue, 09 Nov 2010 23:59:50 GMT')
```
