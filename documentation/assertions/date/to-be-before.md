Passes if the Date instance represents a time earlier than the specified time.

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() + 10 * 1000);
expect(dateA, 'to be before', dateB);
```

When the assertion fails you'll get this output:

```js
var dateA = new Date();
var dateB = new Date(dateA.getTime() - 10 * 1000);
expect(dateA, 'to be before', dateB);
```

```output
Unknown assertion 'to be before', did you mean: 'to be below'
```
