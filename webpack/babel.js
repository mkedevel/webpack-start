module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    //include: paths,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: { 
                                presets: ['es2015'] 
                            }
                        }
                    ]
                }
            ]
        }
    }
};