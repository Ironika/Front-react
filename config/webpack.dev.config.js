const commonPaths = require('./common-paths');

const config = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        historyApiFallback: true,
        hot: false,
        port: 9001
    }
};

module.exports = config;