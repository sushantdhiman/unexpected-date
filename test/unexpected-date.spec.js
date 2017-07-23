var unexpected = require('unexpected'),
    unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function () {
    var expect = unexpected.clone().use(unexpectedDate);
    var dateA = new Date(2010, 10, 10);
    var dateB = new Date(2010, 10, 11);
    var dateC = new Date(2010, 10, 12);

    describe('to equal date', function () {
        it('passes if date objects are same', function () {
            expect(dateA, 'to equal date', dateA);
        });

        it('passes if date objects have same date', function () {
            expect(new Date(0), 'to equal date', new Date(0));
        });

        it('passes if date objects have same date different time', function () {
            expect(new Date(2010, 10, 10, 12), 'to equal date', new Date(2010, 10, 10, 19));
        });

        it('throws the correct error if assertion fails', function () {
            expect(
              function () {
                  expect(dateA, 'to equal date', dateB);
              },
              'to error with',
              'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
              'to equal date new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('to equal time', function () {
        it('passes if date objects are same', function () {
            expect(dateA, 'to equal time', dateA);
        });

        it('passes if date objects have same time', function () {
            expect(new Date(0), 'to equal time', new Date(0));
        });

        it('throws the correct error if assertion fails', function () {
            expect(
              function () {
                  expect(new Date(0), 'to equal time', new Date(1));
              },
              'to error with',
              'expected new Date(\'Thu, 01 Jan 1970 00:00:00 GMT\')\n' +
              'to equal time new Date(\'Thu, 01 Jan 1970 00:00:00.001 GMT\')'
            );
        });
    });

    describe('to be before', function () {
        it('passes if the value occurs before the subject', function () {
            expect(new Date(0), 'to be before', new Date(1));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateB, 'to be before', dateA);
              },
              'to error with',
              'expected new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')\n' +
              'to be before new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('not to be before', function () {
        it('passes if the value does not occur before the subject', function () {
            expect(new Date(1), 'not to be before', new Date(0));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateA, 'not to be before', dateB);
              },
              'to error with',
              'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
              'not to be before new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('to be after', function () {
        it('passes if the value occurs after the subject', function () {
            expect(new Date(1), 'to be after', new Date(0));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateA, 'to be after', dateB);
              },
              'to error with',
              'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
              'to be after new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('not to be after', function () {
        it('passes if the value does not occur after the subject', function () {
            expect(new Date(0), 'not to be after', new Date(1));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateB, 'not to be after', dateA);
              },
              'to error with',
              'expected new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')\n' +
              'not to be after new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('to be same or before', function () {
        it('passes if the value occurs before the subject', function () {
            expect(new Date(0), 'to be same or before', new Date(1));
        });

        it('passes if the value is the same as the subject', function () {
            expect(new Date(0), 'to be same or before', new Date(0));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateB, 'to be same or before', dateA);
              },
              'to error with',
              'expected new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')\n' +
              'to be same or before new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('not to be same or before', function () {
        it('passes if the value does not occur before the subject', function () {
            expect(new Date(1), 'not to be same or before', new Date(0));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateA, 'not to be same or before', dateB);
              },
              'to error with',
              'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
              'not to be same or before new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('to be same or after', function () {
        it('passes if the value occurs after the subject', function () {
            expect(new Date(1), 'to be same or after', new Date(0));
        });

        it('passes if the value is the same as the subject', function () {
            expect(new Date(0), 'to be same or after', new Date(0));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateA, 'to be same or after', dateB);
              },
              'to error with',
              'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
              'to be same or after new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

    describe('not to be same or after', function () {
        it('passes if the value does not occur after the subject', function () {
            expect(new Date(0), 'not to be same or after', new Date(1));
        });

        it('throws the correct error if the assertion fails', function () {
            expect(
              function () {
                  expect(dateB, 'not to be same or after', dateA);
              },
              'to error with',
              'expected new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')\n' +
              'not to be same or after new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')'
            );
        });
    });

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
