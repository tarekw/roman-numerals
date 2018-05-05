const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: __dirname + '/app/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/app'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader', options: { limit: 10 } }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
