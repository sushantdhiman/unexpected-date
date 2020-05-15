var unexpected = require('unexpected'),
  unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function () {
  var expect = unexpected.clone().use(unexpectedDate);

  // Make sure that error messages are rendered deterministically,
  // regardless of the width of the terminal window:
  expect.output.preferredWidth = 80;

  var dateA = new Date(2010, 10, 10);
  var dateB = new Date(2010, 10, 11);

  describe('to equal date', function () {
    it('passes if date objects are same', function () {
      expect(dateA, 'to equal date', dateA);
    });

    it('passes if date objects have same date', function () {
      expect(new Date(0), 'to equal date', new Date(0));
    });

    it('passes if date objects have same date different time', function () {
      expect(
        new Date(2010, 10, 10, 12),
        'to equal date',
        new Date(2010, 10, 10, 19)
      );
    });

    it('throws the correct error if assertion fails', function () {
      expect(
        function () {
          expect(dateA, 'to equal date', dateB);
        },
        'to error with',
        "expected new Date('Tue, 09 Nov 2010 18:30:00 GMT')\n" +
          "to equal date new Date('Wed, 10 Nov 2010 18:30:00 GMT')"
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
        "expected new Date('Thu, 01 Jan 1970 00:00:00 GMT')\n" +
          "to equal time new Date('Thu, 01 Jan 1970 00:00:00.001 GMT')"
      );
    });
  });
});
