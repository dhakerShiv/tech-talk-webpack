const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            }
        ]
    },
    target: ['web', "es6"],
    mode: 'production',
    watch: true
}
