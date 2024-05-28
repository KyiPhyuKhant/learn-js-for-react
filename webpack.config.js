const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry point for the application
    entry: './src/index.js',

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    // Module rules to handle different file types
    module: {
        rules: [
            {
                test: /\.js$/,  // Apply this rule to .js files
                exclude: /node_modules/,  // Exclude node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },

    // Plugins for additional functionality
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],

    // Configuration for the development server
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),  // Serve static files from the public directory
        },
        compress: true,
        port: 9000,
        open: true,  // Open the browser after the server has started
    },
};
