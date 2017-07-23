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

        expect.addAssertion('<date> [not] to be between <date> <date>', function (expect, subject, start, end) {
            return expect(
                helpers.isBetween(subject, start, end),
                '[not] to be true'
            );
        });
    }
};
