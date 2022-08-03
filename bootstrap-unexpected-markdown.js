/*global unexpected:true*/
expect = require('unexpected').clone().use(require('./lib/unexpected-date'));

// Make sure that error messages are rendered deterministically,
// regardless of the width of the terminal window:
expect.output.preferredWidth = 80;
