var unexpected = require('unexpected'),
  unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function () {
  var expect = unexpected.clone().use(unexpectedDate);

  // Make sure that error messages are rendered deterministically,
  // regardless of the width of the terminal window:
  expect.output.preferredWidth = 80;

  var dateA = new Date(2010, 10, 10);
  var dateB = new Date(2010, 10, 11);

  describe('to be close to', function () {
    it('passes if date objects are same', function () {
      expect(dateA, 'to be close to', dateA);
    });

    it('passes if date objects are within a second of each other (default epsilon)', function () {
      var dateC = new Date(dateA);
      dateC.setMilliseconds(500);
      expect(dateA, 'to be close to', dateC);
    });

    it('passes if date objects have same date different time, with epsilon', function () {
      expect(
        new Date(2010, 10, 10, 12),
        'to be close to',
        new Date(2010, 10, 10, 19),
        7 * 60 * 60 * 1000
      );
    });

    it('throws the correct error if assertion fails', function () {
      expect(
        function () {
          expect(dateA, 'to be close to', dateB);
        },
        'to error with',
        "expected new Date('2010-11-09T18:30:00Z')\n" +
          "to be close to new Date('2010-11-10T18:30:00Z') (epsilon: 1e+3)"
      );
    });

    it('throws the correct error if assertion fails (with epsilon)', function () {
      expect(
        function () {
          expect(dateA, 'to be close to', dateB, 1000);
        },
        'to error with',
        "expected new Date('2010-11-09T18:30:00Z')\n" +
          "to be close to new Date('2010-11-10T18:30:00Z') (epsilon: 1e+3)"
      );
    });
  });
});
