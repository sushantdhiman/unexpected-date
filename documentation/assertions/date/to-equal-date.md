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
expected new Date('Sun, 23 Jul 2017 08:23:25.753 GMT')
to equal date new Date('Wed, 10 Nov 2010 00:00:00 GMT')
```
