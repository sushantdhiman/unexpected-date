Passes if the Date instance is between two other given instances:

```js
var dateA = new Date(Date.UTC(2010, 10, 10));
var dateB = new Date(Date.UTC(2010, 10, 11));
var dateC = new Date(Date.UTC(2010, 10, 12));
expect(dateB, "to be between", dateA, dateC);
```

To include the edge points as valid values you can use `inclusively` flag:

```js
expect(new Date(0), "to be inclusively between", new Date(0), new Date(1));
```

Failing assertions gives the following:

```js
expect(
  new Date(Date.UTC(2010, 10, 10)),
  "to be between",
  new Date(Date.UTC(2010, 10, 10, 0, 0, 1)),
  new Date(Date.UTC(2010, 10, 10, 0, 0, 2))
);
```

```output
expected new Date('Wed, 10 Nov 2010 00:00:00 GMT')
to be between new Date('Wed, 10 Nov 2010 00:00:01 GMT') and new Date('Wed, 10 Nov 2010 00:00:02 GMT')
```
