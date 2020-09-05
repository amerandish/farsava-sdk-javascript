const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (_env, args) => {
    const IS_PROD = args.p;

    const BUILD_PATH = "release";

    const JS_FILE_NAME = "farsava-sdk.min.js";

    const devtool = IS_PROD ? false : "source-map";

    const plugins = [new webpack.optimize.ModuleConcatenationPlugin()];

    // if (IS_PROD) {
    plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "../typings/farsava.d.ts",
                    to: "../release/farsava.d.ts",
                },
            ],
        })
    );
    // }

    return {
        context: path.resolve(__dirname, "src"),
        entry: "./farsava.ts",
        plugins,
        output: {
            path: path.resolve(__dirname, BUILD_PATH),
            filename: JS_FILE_NAME,
            library: "FarsavaSDK",
            libraryTarget: "umd",
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        module: {
            rules: [
                {
                    test: require.resolve("./src/farsava.ts"),
                    use: [
                        {
                            loader: "expose-loader",
                            options: {
                                exposes: ["Farsava"],
                            },
                        },
                    ],
                },
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
