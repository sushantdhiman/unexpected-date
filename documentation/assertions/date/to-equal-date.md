Passes if one Date instance represents the same "date" as another Date instance.

```js
var date = new Date();
expect(date, 'to equal date', new Date());
expect(date, 'not to equal date', new Date(Date.UTC(2010, 10, 10)));
```

When the assertion fails you'll get this output:

```js
var date = new Date(Date.UTC(2010, 10, 1));
expect(date, 'to equal date', new Date(Date.UTC(2010, 10, 10)));
```

```output
expected new Date('2010-11-01T00:00:00Z')
to equal date new Date('2010-11-10T00:00:00Z')
```
