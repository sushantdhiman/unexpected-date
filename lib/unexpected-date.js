var helpers = require('./helpers');

module.exports = {
    name: 'unexpected-date',
    installInto: function (expect) {
        expect.addAssertion('<date> [not] to be after <date>', function (expect, subject, value) {
            return expect(helpers.isAfter(subject, value), '[not] to be true');
        });

        expect.addAssertion('<date> [not] to be before <date>', function (expect, subject, value) {
            return expect(helpers.isBefore(subject, value), '[not] to be true');
        });

        expect.addAssertion('<date> [not] to equal time <date>', function (expect, subject, value) {
            return expect(helpers.isEqualDateTime(subject, value), '[not] to be true');
        });

        expect.addAssertion('<date> [not] to equal date <date>', function (expect, subject, value) {
            return expect(helpers.isEqualDate(subject, value), '[not] to be true');
        });

        expect.addAssertion('<date> [not] to be same or after <date>', function (expect, subject, value) {
            return expect(
                helpers.isAfter(subject, value) || helpers.isEqualDateTime(subject, value),
                '[not] to be true'
            );
        });

        expect.addAssertion('<date> [not] to be same or before <date>', function (expect, subject, value) {
            return expect(
                helpers.isBefore(subject, value) || helpers.isEqualDateTime(subject, value),
                '[not] to be true'
            );
        });

        expect.addAssertion('<date> [not] to be [inclusively] between <date> <date>', function (expect, subject, start, end) {
            expect.argsOutput = function (output) {
                output.append(function (output) {
                    output.appendInspected(start);
                    output.text(' and ');
                    output.appendInspected(end);
                });
            };

            var isBetween = expect.flags.inclusively === true
              ? helpers.isBetween(subject, start, end) || (helpers.isEqualDateTime(subject, start) || helpers.isEqualDateTime(subject, end))
              : helpers.isBetween(subject, start, end);

            return expect(isBetween, '[not] to be true');
        });
    }
};
