const path = require('path');
const glob = require('glob');

function getEntry() {
    var entry = {};
    glob.sync(__dirname + "/src/*.js").forEach(function (file) {
        var name = file.match(/([^/]+?)\.js/)[1];
        entry[name] = __dirname + "/src/" + name + ".js";
    });
    return entry;
}

module.exports = {
    // entry: {
    //     app: path.resolve(__dirname, 'src/*.js')
    // },
    entry: getEntry(),
    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};