import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import Dotenv from "dotenv-webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, {
  Configuration,
  DefinePlugin,
  EnvironmentPlugin,
  HotModuleReplacementPlugin,
} from "webpack";
import "webpack-dev-server";

// FEATURE: use if src path is required
// const srcDir = path.resolve(__dirname, "src");
const destDir = path.resolve(__dirname, "build");

const config: Configuration = {
  mode: "development",
  output: {
    path: destDir,
    clean: true,
    publicPath: "/",
    filename: "js/[name].[contenthash].js",
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.(config)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/configs/[name][ext]",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@acl": path.resolve(__dirname, "src/@acl"),
    },
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({ extensions: ["js", "jsx", "ts", "tsx"] }),
    new EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    new FaviconsWebpackPlugin({
      logo: "./public/favicon.ico",
    }),
    new DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
    }),
    new Dotenv({
      path: "./env/.env.qa",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "manifest.json" },
        { from: "./public/robots.txt", to: "robots.txt" },
        { from: "web.config", to: "web.config" },
      ],
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000, // Minimum number of characters
    }),
  ],
  devtool: "inline-source-map",
};

export default config;
