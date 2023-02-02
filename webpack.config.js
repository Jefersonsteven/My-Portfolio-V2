const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
        assetModuleFilename: 'assets/images/[hash][ext][query]',
    },
    resolve: {
        extensions: ['.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.svg/,
                type: 'asset/resource'
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'about-me.html',
            template: './public/1/about-me.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'projects.html',
            template: './public/1/projects.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './public/1/contact.html',
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets/images'),
                    to: 'assets/images'
                },
                // {
                //     from: path.resolve(__dirname, 'public', '1'),
                //     to: '1'
                // }
            ]
        })
    ]
}