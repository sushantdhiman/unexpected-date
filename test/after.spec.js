var unexpected = require('unexpected'),
  unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function () {
  var expect = unexpected.clone().use(unexpectedDate);

  // Make sure that error messages are rendered deterministically,
  // regardless of the width of the terminal window:
  expect.output.preferredWidth = 80;
  var dateA = new Date(2010, 10, 10);
  var dateB = new Date(2010, 10, 11);

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
        "expected new Date('2010-11-09T18:30:00Z')\n" +
          "to be after new Date('2010-11-10T18:30:00Z')"
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
        "expected new Date('2010-11-10T18:30:00Z')\n" +
          "not to be after new Date('2010-11-09T18:30:00Z')"
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
        "expected new Date('2010-11-09T18:30:00Z')\n" +
          "to be same or after new Date('2010-11-10T18:30:00Z')"
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
        "expected new Date('2010-11-10T18:30:00Z')\n" +
          "not to be same or after new Date('2010-11-09T18:30:00Z')"
      );
    });
  });
});
