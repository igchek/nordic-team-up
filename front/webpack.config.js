const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackMockServer = require("webpack-mock-server");
const loader = require('sass-loader');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        open: true,
        host: 'localhost',
        // onBeforeSetupMiddleware: devServer => webpackMockServer.use(devServer.app, {
        // 
            port: 8888,
        //     entry: ['webpack.mock.ts']
        // }),
    },
    resolve:{
        extensions:['.js','.jsx','.ts','.tsx', '.sass', '.scss', '.module.scss','.jpg'],
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@ArtistLogo": path.resolve(__dirname, "./src/assets/ArtistLogo"),
            "@PromoLogo": path.resolve(__dirname, "./src/assets/PromoLogo"),
            "@TemplatePics": path.resolve(__dirname, "./src/assets/templates"),
            "@Types": path.resolve(__dirname, './Types'),
            "@Store": path.resolve(__dirname, "./src/store")
            // "@Avatar": path.resolve(__dirname, "./src/assets/Personal/Avatars")
        }
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.s[ac]css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader:"sass-loader",
                        options:{
                            sassOptions:{
                                indentWidth: 4,
                                includePaths:[path.resolve(__dirname, "src/stylesCommon/")]
                            }
                        }
                    }
                ],

            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader:"sass-loader",
                        options:{
                            sassOptions:{
                                indentWidth: 4,
                                includePaths:[path.resolve(__dirname, "src/stylesCommon/")]
                            }
                        }
                    }
                ],
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
    } else {
        config.mode = 'development';
    }
    return config;
    
};