import * as path from 'path';
import * as webpack from 'webpack';

const rootPath = path.resolve(__dirname, "../");
const assetsPath = path.resolve(rootPath, "./dist/static/");

const config: webpack.Configuration = {
    context: path.resolve(__dirname, ".."),
    entry: "./src/TodoApp.tsx",
    output: {
        path: assetsPath,
        publicPath: "/static/",
        filename: "bundle.js",
    },
    devtool: "#source-map",
    resolve:{
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
    /*plugins: []*/
};

export default config;