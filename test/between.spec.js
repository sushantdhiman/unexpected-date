var unexpected = require('unexpected'),
  unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function () {
  var expect = unexpected.clone().use(unexpectedDate);

  // Make sure that error messages are rendered deterministically,
  // regardless of the width of the terminal window:
  expect.output.preferredWidth = 80;

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
        "expected new Date('Tue, 09 Nov 2010 18:30:00 GMT')\n" +
          "to be between new Date('Wed, 10 Nov 2010 18:30:00 GMT') " +
          "and new Date('Thu, 11 Nov 2010 18:30:00 GMT')"
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
        "expected new Date('Wed, 10 Nov 2010 18:30:00 GMT')\n" +
          "not to be between new Date('Tue, 09 Nov 2010 18:30:00 GMT') " +
          "and new Date('Thu, 11 Nov 2010 18:30:00 GMT')"
      );
    });
  });

  describe('to be inclusively between', function () {
    it('passes if the subject is the same as the first value', function () {
      expect(
        new Date(0),
        'to be inclusively between',
        new Date(0),
        new Date(1)
      );
    });

    it('passes if the subject is the same as the second value', function () {
      expect(
        new Date(1),
        'to be inclusively between',
        new Date(0),
        new Date(1)
      );
    });

    it('passes if the subject occurs betwen the two values', function () {
      expect(
        new Date(1),
        'to be inclusively between',
        new Date(0),
        new Date(2)
      );
    });

    it('passes if the two values are the same', function () {
      expect(
        new Date(0),
        'to be inclusively between',
        new Date(0),
        new Date(0)
      );
    });

    it('throws the correct error if the assertion fails', function () {
      expect(
        function () {
          expect(
            new Date(2010, 1, 4),
            'to be inclusively between',
            new Date(2010, 1, 1),
            new Date(2010, 1, 1, 23)
          );
        },
        'to error with',
        "expected new Date('Wed, 03 Feb 2010 18:30:00 GMT')\n" +
          "to be inclusively between new Date('Sun, 31 Jan 2010 18:30:00 GMT') " +
          "and new Date('Mon, 01 Feb 2010 17:30:00 GMT')"
      );
    });
  });

  describe('not to be inclusively between', function () {
    it('passes if the subject is neither the same as the first value or the second, nor does it occur between them', function () {
      expect(
        new Date(0),
        'not to be inclusively between',
        new Date(1),
        new Date(1)
      );
    });

    it('throws the correct error if the assertion fails', function () {
      expect(
        function () {
          expect(
            new Date(2010, 1, 2),
            'not to be inclusively between',
            new Date(2010, 1, 2),
            new Date(2010, 1, 2)
          );
        },
        'to error with',
        "expected new Date('Mon, 01 Feb 2010 18:30:00 GMT')\n" +
          "not to be inclusively between new Date('Mon, 01 Feb 2010 18:30:00 GMT') " +
          "and new Date('Mon, 01 Feb 2010 18:30:00 GMT')"
      );
    });
  });
});
