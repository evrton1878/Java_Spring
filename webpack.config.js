const mypath = require("path");

module.exports = {
    mode:"development",
    entry:{
        client:mypath.resolve('src/main/webapp/react/index.jsx'),
    },
    output:{
        path:mypath.resolve("src/main/webapp/resources/js"),
        filename:"[name].js"
    },
    module: {
        rules: [
            {
                test:/\.jsx$/,
                enforce: 'pre',
                use:[
                    {loader:"babel-loader",
                        options: {
                            "presets": ["@babel/preset-env","@babel/preset-react"],
                            "plugins": [
                                ["@babel/transform-runtime"]
                            ]
                        }},
                    {loader:"source-map-loader"}
                ],
            },

            {
                test:/\.scss/,
                use:['style-loader',"css-loader","sass-loader"]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json','.jsx','.scss']
    },
    target:"node",
};