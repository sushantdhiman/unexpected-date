var unexpected = require('unexpected'),
  unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function () {
  var expect = unexpected.clone().use(unexpectedDate);

  // Make sure that error messages are rendered deterministically,
  // regardless of the width of the terminal window:
  expect.output.preferredWidth = 80;
  var dateA = new Date(2010, 10, 10);
  var dateB = new Date(2010, 10, 11);

  describe('with date semantics', function () {
    it('passes if the subject is valid date', function () {
      expect(dateA.toISOString(), 'with date semantics', 'to be before', dateB);
    });

    it('throws if subject is invalid date', function () {
      expect(
        function () {
          expect('Yak', 'with date semantics', 'to be after', dateB);
        },
        'to error with',
        "expected 'Yak'\n" +
          "with date semantics to be after new Date('Wed, 10 Nov 2010 18:30:00 GMT')"
      );
    });
  });
});
