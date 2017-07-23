Passes if the Date instance represents a time later than the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() - 10 * 1000);
expect(dateA, 'to be after', dateB);
```

When the assertion fails you'll get this output:

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() + 10 * 1000);
expect(dateA, 'to be after', dateB);
```

```output
Unknown assertion 'to be after', did you mean: 'to be a'
```
