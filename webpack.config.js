const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "bundle.js"
    },

    // module: {
    //     rules: [{
    //         test: /.(jpe?g|png|wav|gif|woff|woff2|eot|ttf|svg)(?[a-z0-9=.]+)?$/,
    //         loader: 'url-loader?limit=100000'
    //     }]
    // }
}