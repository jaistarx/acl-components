import type { StorybookConfig } from '@storybook/react-webpack5';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import webpack, { DefinePlugin, EnvironmentPlugin, HotModuleReplacementPlugin } from 'webpack';
import 'webpack-dev-server';

const config: StorybookConfig = {
  stories: [
    '../src/development/sb-docs/**/*.mdx',
    '../src/development/sb-docs/**/*.story.@(js|jsx|mjs|ts|tsx)',
    '../src/components/**/*.mdx',
    '../src/components/**/*.story.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true, // NOTE: Enable file system cache for faster rebuilds
      },
    },
  },
  staticDirs: ['../public', { from: '../src/common/assets', to: '/static' }],
  webpackFinal: async (config: webpack.Configuration) => {
    config.plugins?.push(
      new webpack.ProgressPlugin(),
      new HotModuleReplacementPlugin(),
      new ForkTsCheckerWebpackPlugin({ async: true }), // NOTE: Async for faster development builds
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        files: 'src/**/*.{js,jsx,ts,tsx}',
        cache: true,
      }),
      new EnvironmentPlugin({
        NODE_ENV: 'development',
      }),
      new DefinePlugin({
        VERSION: JSON.stringify(require('../package.json').version),
      }),
    );

    return {
      ...config,
      optimization: {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
        },
        minimizer: [...(config.optimization?.minimizer || []), new CssMinimizerPlugin()],
      },
      devtool: 'inline-source-map',
      cache: {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      },
      stats: {
        ...(typeof config.stats === 'object' && config.stats ? config.stats : {}),
        errorDetails: true,
      },
      devServer: {
        ...config.devServer,
        historyApiFallback: true,
      },
    };
  },
};

export default config;
