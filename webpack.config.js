const path = require('path')
const Dotenv = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env, arguments) => {
    return {
        entry: path.join(__dirname, 'src', 'index.tsx'),
        devtool: Boolean(arguments.mode === 'development') ? 'inline-source-map' : false,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[chunkhash].js',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            roots: [__dirname],
            alias: {
                '@api': path.resolve('src', 'api'),
                '@hooks': path.resolve('src', 'app', 'hooks'),
                '@assets': path.resolve('src', 'assets'),
                '@components': path.resolve('src', 'components'),
                '@pages': path.resolve('src', 'pages'),
                '@redux-actions': path.resolve('src', 'store', 'actions'),
                '@redux-store': path.resolve('src', 'store'),
                '@interfaces': path.resolve('src', 'interfaces'),
                '@utils': path.resolve('src', 'utils'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            cacheDirectory: true,
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        corejs: { version: 3 },
                                        useBuiltIns: 'entry',
                                        targets: {
                                            edge: '17',
                                            firefox: '60',
                                            chrome: '67',
                                            safari: '11.1',
                                            ie: '11',
                                        },
                                    },
                                ],
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
                                ['@babel/plugin-proposal-class-properties'],
                                ['@babel/transform-runtime'],
                            ],
                        },
                    },
                },
                {
                    test: /\.less$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
                },
                {
                    test: /\.(png|jp(e*)g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html') }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].min.css'
            }),
            new CleanWebpackPlugin(),
            new Dotenv(),
        ],
        devServer: {
            port: 3000,
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            open: true,
            historyApiFallback: true,
        },
    }
}
