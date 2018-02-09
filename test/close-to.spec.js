var unexpected = require('unexpected'),
  unexpectedDate = require('../lib/unexpected-date');

describe('unexpected-date', function() {
  var expect = unexpected.clone().use(unexpectedDate);
  var dateA = new Date(2010, 10, 10);
  var dateB = new Date(2010, 10, 11);

  describe('to be close to', function() {
    it('passes if date objects are same', function() {
      expect(dateA, 'to be close to', dateA);
    });

    it('passes if date objects are within a second of each other (default epsilon)', function() {
      var dateC = new Date(dateA);
      dateC.setMilliseconds(500);
      expect(dateA, 'to be close to', dateC);
    });

    it('passes if date objects have same date different time, with epsilon', function() {
      expect(new Date(2010, 10, 10, 12), 'to be close to', new Date(2010, 10, 10, 19), 7 * 60 * 60 * 1000);
    });

    it('throws the correct error if assertion fails', function() {
      expect(
        function() {
          expect(dateA, 'to be close to', dateB);
        },
        'to error with',
        'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
        'to be close to new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\') (epsilon: 1e+3)'
      );
    });

    it('throws the correct error if assertion fails (with epsilon)', function() {
      expect(
        function() {
          expect(dateA, 'to be close to', dateB, 1000);
        },
        'to error with',
        'expected new Date(\'Tue, 09 Nov 2010 18:30:00 GMT\')\n' +
        'to be close to new Date(\'Wed, 10 Nov 2010 18:30:00 GMT\') (epsilon: 1e+3)'
      );
    });
  });
});
