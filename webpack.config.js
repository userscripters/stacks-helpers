const path = require('path');
const webpack = require('webpack'); // for the banner plugin

module.exports = {
    entry: './src/index.ts',
    mode: 'none',
    target: 'node',
    output: {
        filename: './stacks_helpers.js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'ts-loader'
            }
        ]
    }
}