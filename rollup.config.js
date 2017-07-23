var fs = require('fs');
var pathModule = require('path');

module.exports = {
    entry: 'lib/unexpected-date.js',
    dest: 'unexpected-date.min.js',
    format: 'umd',
    moduleName: 'unexpectedDate',
    sourceMap: true,
    banner: '/*!\n' + fs.readFileSync(pathModule.resolve(__dirname, 'LICENSE.md'), 'utf-8').replace(/^/mg, ' * ').replace(/\s+$/g, '') + '/\n',
    plugins: [
        require('rollup-plugin-commonjs')(),
        require('rollup-plugin-node-resolve')(),
        require('rollup-plugin-node-globals')(),
        require('rollup-plugin-uglify')({
            output: {
                comments: function (node, comment) {
                    return /^!|@preserve|@license|@cc_on/i.test(comment.value);
                }
            }
        })
    ]
};
