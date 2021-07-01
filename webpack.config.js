const path = require("path")

module.exports = {
    entry: {
        bundle: "./js/index.ts"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "src/assets/js")
    },

    mode: "production",
    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules/"),
                    path.resolve(__dirname, "vendor/"),
                    path.resolve(__dirname, "src/")
                ],
                use: [
                    { loader: "ts-loader" }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
