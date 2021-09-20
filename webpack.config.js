const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

//entry, output, module, plugins, devServer, devtool, watchOptions
module.exports = {
    //main
    entry: {
        main: './src/index.js',
    },
    //filename, path, publicPath
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // puclicPath: '',
    },
    //rules
    module: {
        //配列
        rules: [
            //test, use
            {
                test: /\.scss$/,
                //配列
                use: [
                    //loader, options
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|eot|wof|woff|ttf)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: './images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    //配列
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    //contentBase, open, watchContentBase, writeToDisk
    devServer: {
        contentBase: path.join(__dirname, ''),
        open: true,
        watchContentBase: true,
        writeToDisk: true,
    },
    devtool: "source-map",
    watchOptions: {
        ignored: /node_modules/,
    },
};