Passes if the Date instance represents a time at or before the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() + 10 * 1000);
expect(dateA, 'to be same or before', dateB);
```

When the assertion fails you'll get this output:

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() - 10 * 1000);
expect(dateA, 'to be same or before', dateB);
```

```output
Unknown assertion 'to be same or before', did you mean: 'to be a number'
```
