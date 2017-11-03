const pkg = require('./package.json');

module.exports = {
    basePath : '.',
    frameworks: ['mocha', 'expect', 'expect-maptalks', 'happen'],
    files: [
        'node_modules/maptalks/dist/maptalks.js',
        'dist/' + pkg.name + '.js',
        'test/**/*.js'
    ],
    preprocessors: {
    },
    browsers: ['Chrome'],
    reporters: ['mocha'],
    singleRun : true
};
