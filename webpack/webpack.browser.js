const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const pkg = require("../package.json");
const banner =
    `\n ${pkg.name}` +
    `\n version : ${pkg.version}` +
    "\n company : AmerAndish Hoshmand <amerandish.com>" +
    `\n author : ${pkg.author}` +
    `\n licence : ${pkg.license}` +
    `\n ${pkg.homepage && pkg.homepage}`;

module.exports = (_env, args) => {
    const IS_PROD = !!args.p;
    const MIN = !!args.m;

    const BUILD_PATH = "../browser/src";

    let JS_FILE_NAME = "farsava-sdk.js";

    const devtool = IS_PROD ? false : "source-map";

    const plugins = [
        new webpack.BannerPlugin(banner),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ];

    if (MIN) {
        JS_FILE_NAME = "farsava-sdk.min.js";
    }

    return {
        mode: IS_PROD ? "production" : "development",
        context: path.resolve(__dirname, "../src"),
        entry: "../src/farsava.ts",
        plugins,
        optimization: {
            minimize: MIN,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
        output: {
            path: path.resolve(__dirname, BUILD_PATH),
            filename: JS_FILE_NAME,
            library: "Farsava",
            libraryTarget: "umd",
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        stats: {
            colors: true,
        },
        devtool,
    };
};
