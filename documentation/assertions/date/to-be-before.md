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
expected new Date('Sun, 23 Jul 2017 08:23:25.661 GMT')
to be before new Date('Sun, 23 Jul 2017 08:23:15.661 GMT')
```
