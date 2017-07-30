var unexpected = require('unexpected'),
    unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function () {
    var expect = unexpected.clone().use(unexpectedDate);
    var dateA = new Date(2010, 10, 10);
    var dateB = new Date(2010, 10, 11);
    var dateC = new Date(2010, 10, 12);

    describe('to be between', function () {
        it('passes if the subject occurs between the two values', function () {
            expect(new Date(1), 'to be between', new Date(0), new Date(2));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateA, 'to be between', dateB, dateC);
              },
              'to error with',
              'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
              'to be between new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\'), new Date(\'Thu, 11 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('not to be between', function () {
        it('passes if the subject does not occur between the two values', function () {
            expect(new Date(0), 'not to be between', new Date(1), new Date(2));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateB, 'not to be between', dateA, dateC);
              },
              'to error with',
              'expected new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')\n' +
              'not to be between new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\'), new Date(\'Thu, 11 Nov 2010 18:30:00 GMT\')'
            );
        });
    });
});
