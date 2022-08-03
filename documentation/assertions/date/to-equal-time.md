Passes if one Date instance represents the same time as another Date instance.

```js
var date = new Date();
expect(date, 'to equal time', new Date());
expect(date, 'not to equal time', new Date(Date.UTC(2010, 10, 10)));
```

When the assertion fails you'll get this output:

```js
var date = new Date(Date.UTC(2010, 10, 1));
expect(date, 'to equal time', new Date(Date.UTC(2010, 10, 10)));
```

```output
expected new Date('2010-11-01T00:00:00Z')
to equal time new Date('2010-11-10T00:00:00Z')
```
