Converts a string to `Date`, then delegates to another
assertion.

The purpose is to make the assertions defined for `Date` instances easily
accessible when you need to make assertions about a string as date.

```js
expect(
  "2010-11-10T00:00:00.000Z",
  "with date semantics",
  "to satisfy",
  new Date(Date.UTC(2010, 10, 10, 0, 0, 0))
);
```

```js
expect(
  "2010-11-10T10:00:00.000Z",
  "with date semantics",
  "to be after",
  new Date(Date.UTC(2010, 10, 10, 0, 0, 0))
);
```
