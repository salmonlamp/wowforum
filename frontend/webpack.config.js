module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader"}
                ],
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules|App.scss/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        }
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /App.scss/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|ttf|woff|woff2|otf)$/i,
                use: 'file-loader'
            },
        ]
    }
};