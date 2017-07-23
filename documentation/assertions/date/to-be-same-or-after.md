Passes if the Date instance represents a time at or later than the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() - 10 * 1000);
expect(dateA, 'to be same or after', dateB);
```

When the assertion fails you'll get this output:

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() + 10 * 1000);
expect(dateA, 'to be same or after', dateB);
```

```output
Unknown assertion 'to be same or after', did you mean: 'to be a date'
```
