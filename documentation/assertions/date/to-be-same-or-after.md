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
expected new Date('Sun, 23 Jul 2017 08:23:25.711 GMT')
to be same or after new Date('Sun, 23 Jul 2017 08:23:35.711 GMT')
```
