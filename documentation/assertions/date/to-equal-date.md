Passes if one Date instance represents the same "date" as another Date instance.

```js
var date = new Date();
expect(date, 'to equal date', new Date());
expect(date, 'not to equal date', new Date(Date.UTC(2010, 10, 10)));
```

When the assertion fails you'll get this output:

```js
var date = new Date();
expect(date, 'to equal date', new Date(Date.UTC(2010, 10, 10)));
```

```output
Unknown assertion 'to equal date', did you mean: 'to equal'
```
