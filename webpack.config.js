const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WatchRunPlugin = require('./src/WatchRunPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    compress: {
                        sequences: false, // DO NOT join consecutive simple statements using the comma operator
                        warnings: false, // DO NOT display warnings when dropping unreachable code or unused declarations etc.
                    },
                    output: {
                        semicolons: false,  // DO NOT separate statements with semicolons. Use newlines instead.
                    }
                }
            }),
        ]
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
    plugins: [
        new WatchRunPlugin({ separator: ":" })
    ],
    target: ['web', "es6"],
    mode: 'production',
    watch: true,
    // stats: {
    //     // Display bailout reasons
    //     optimizationBailout: true,
    // },
}
