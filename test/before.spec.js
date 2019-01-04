var unexpected = require('unexpected'),
  unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function() {
  var expect = unexpected.clone().use(unexpectedDate);

  // Make sure that error messages are rendered deterministically,
  // regardless of the width of the terminal window:
  expect.output.preferredWidth = 80;

  var dateA = new Date(2010, 10, 10);
  var dateB = new Date(2010, 10, 11);

  describe('to be before', function() {
    it('passes if the value occurs before the subject', function() {
      expect(new Date(0), 'to be before', new Date(1));
    });

    it('throws the correct error if the assertion fails', function() {
      expect(
        function() {
          expect(dateB, 'to be before', dateA);
        },
        'to error with',
        'expected new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')\n' +
              'to be before new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')'
      );
    });
  });

  describe('not to be before', function() {
    it('passes if the value does not occur before the subject', function() {
      expect(new Date(1), 'not to be before', new Date(0));
    });

    it('throws the correct error if the assertion fails', function() {
      expect(
        function() {
          expect(dateA, 'not to be before', dateB);
        },
        'to error with',
        'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
              'not to be before new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')'
      );
    });
  });

  describe('to be same or before', function() {
    it('passes if the value occurs before the subject', function() {
      expect(new Date(0), 'to be same or before', new Date(1));
    });

    it('passes if the value is the same as the subject', function() {
      expect(new Date(0), 'to be same or before', new Date(0));
    });

    it('throws the correct error if the assertion fails', function() {
      expect(
        function() {
          expect(dateB, 'to be same or before', dateA);
        },
        'to error with',
        'expected new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')\n' +
              'to be same or before new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')'
      );
    });
  });

  describe('not to be same or before', function() {
    it('passes if the value does not occur before the subject', function() {
      expect(new Date(1), 'not to be same or before', new Date(0));
    });

    it('throws the correct error if the assertion fails', function() {
      expect(
        function() {
          expect(dateA, 'not to be same or before', dateB);
        },
        'to error with',
        'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
              'not to be same or before new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\')'
      );
    });
  });
});
