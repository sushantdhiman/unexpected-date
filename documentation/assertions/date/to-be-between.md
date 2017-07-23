Passes if the Date instance is between two other given instances:

```js
var dateA = new Date(Date.UTC(2010, 10, 10));
var dateB = new Date(Date.UTC(2010, 10, 11));
var dateC = new Date(Date.UTC(2010, 10, 12));
expect(dateB, 'to be between', dateA, dateC);
```

Failing assertions gives the following:

```js
var dateA = new Date(Date.UTC(2010, 10, 10));
expect(new Date(Date.UTC(2010, 10, 1)), 'to be between', dateA, dateA);
```

```output
expected new Date('Mon, 01 Nov 2010 00:00:00 GMT')
to be between new Date('Wed, 10 Nov 2010 00:00:00 GMT'), new Date('Wed, 10 Nov 2010 00:00:00 GMT')
```
