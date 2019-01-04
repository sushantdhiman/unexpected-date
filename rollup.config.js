var fs = require('fs');
var pathModule = require('path');

module.exports = {
  input: 'lib/unexpected-date.js',
  output: {
    file: 'unexpected-date.min.js',
    format: 'umd',
    name: 'unexpectedDate',
    sourcemap: true,
    banner: '/*!\n' + fs.readFileSync(pathModule.resolve(__dirname, 'LICENSE.md'), 'utf-8').replace(/^/mg, ' * ').replace(/\s+$/g, '') + '/\n'
  },
  plugins: [
    require('rollup-plugin-node-resolve')(),
    require('rollup-plugin-node-globals')(),
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-uglify').uglify({
      output: {
        comments: function(node, comment) {
          return /^!|@preserve|@license|@cc_on/i.test(comment.value);
        }
      }
    })
  ]
};
