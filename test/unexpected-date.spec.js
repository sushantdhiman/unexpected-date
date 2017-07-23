var unexpected = require('unexpected'),
    unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function () {
    var expect = unexpected.clone()
        .use(unexpectedDate);
});
