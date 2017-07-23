Passes if one moment instance represents the same time as another moment instance.

```js
var date = new Date();
expect(date, 'to equal time', new Date());
expect(date, 'not to equal time', new Date(Date.UTC(2010, 10, 10)));
```

When the assertion fails you'll get this output:

```js
var date = new Date();
expect(date, 'to equal time', new Date(Date.UTC(2010, 10, 10)));
```

```output
Unknown assertion 'to equal time', did you mean: 'to equal'
```
