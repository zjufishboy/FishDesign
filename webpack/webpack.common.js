const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/entry/index.tsx",
    output: {
        filename: "fish-design.js",
        path: path.resolve(
            __dirname,
            "../dist"
        ),
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/entry/index.html",
            favicon:path.resolve(__dirname,'../src/assets/fishDesign.svg')
        }),
    ],
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json",
        ],
        alias:{
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            }, 
            {
                test: /\.less$/,
                exclude:/\.module\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader']
            }
        ],
    },
};
