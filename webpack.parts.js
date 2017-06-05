const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    app: path.join( __dirname, 'index' ),
    build: path.join( __dirname, 'public', 'build' ),
    public: path.join( __dirname, 'public' )
};

exports.commonConfig = () => ({
    entry: [
        'react-hot-loader/patch',
        PATHS.app
    ],
    output: {
        path: PATHS.build,
        publicPath: '/build/',
        filename: '[name].js'
    },
    stats: {
        hash: false,
        version: false,
        children: false
    },
    resolve: {
        extensions: ['.scss', '.js'],
        modules: ['node_modules', 'javascript', 'styles']
    }
});

exports.developmentConfig = () => ({
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
    ],
    devtool: 'eval-source-map'
});

exports.productionConfig = () => ({
    output: {
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin([ PATHS.build ], {
            verbose: false
        })
    ]
});

exports.lintStyles = () => ({
    plugins: [
        new StyleLintPlugin({
            failOnError: false,
            context: path.join( __dirname, 'styles' )
        })
    ]
});

exports.loadJavaScript = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include,
                exclude,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
});

exports.loadStyles = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                include,
                exclude,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.join( __dirname, 'styles' )],
                            sourceMap: true,
                            url: false,
                        }
                    }
                ]
            }
        ]
    }
});

exports.extractStyles = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                include,
                exclude,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                sourceMap: false,
                                url: false
                            }
                        },
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [path.join( __dirname, 'styles' )],
                                sourceMap: false,
                                url: false
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
});

exports.devServer = () => ({
    devServer: {
        publicPath: '/build/',
        contentBase: path.join( __dirname, 'public' ),
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
});
