const webpack = require("webpack");
const fs = require("fs");
const path = require("path");

const userscriptHeader = fs.readFileSync("./userscriptHeader.js", "utf-8");
const styleRules = fs.readFileSync("./src/style.css", "utf-8");

module.exports = [/*{ //Build for Chrome extension
    entry: "./src/index.tsx",
    output: {
        filename: "fmu-chrome.js",
        path: __dirname + "/dist"
    },

    optimization: {
        minimize: false
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    target: "web",

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
},*/
{ // Build for userscript
    entry: "./src/index.tsx",

    output: {
        filename: "fmu-default.user.js",
        path: __dirname + "/dist"
    },

    optimization: {
        minimize: false
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "~": path.resolve(__dirname, "src/")
        }
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [new webpack.BannerPlugin({
        banner: userscriptHeader + "GM_addStyle(`" + styleRules + "`);",
        entryOnly: true,
        raw: true
    })],

    target: "web",

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}];