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
expected new Date('Sun, 23 Jul 2017 08:23:25.772 GMT')
to equal time new Date('Wed, 10 Nov 2010 00:00:00 GMT')
```
