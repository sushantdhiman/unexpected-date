/*global unexpected:true*/
unexpected = require('unexpected')
  .clone()
  .use(require('./lib/unexpected-date'));

// Make sure that error messages are rendered deterministically,
// regardless of the width of the terminal window:
unexpected.output.preferredWidth = 80;
