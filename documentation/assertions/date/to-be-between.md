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
expect(new Date(), 'to be between', dateA, dateA);
```

```output
Unknown assertion 'to be between', did you mean: 'to be below'
```
