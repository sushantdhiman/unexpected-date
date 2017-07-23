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
expected new Date('Sun, 23 Jul 2017 08:23:25.627 GMT')
to be after new Date('Sun, 23 Jul 2017 08:23:35.627 GMT')
```
