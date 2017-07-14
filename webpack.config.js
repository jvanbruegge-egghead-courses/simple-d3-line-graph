const path = require('path');

const appPath = (...names) => path.join(process.cwd(), ...names);

//This will be merged with the config from the flavor
module.exports = {
    entry: {
        main: [
            appPath('src', 'index.js'),
        ]
    },
    output: {
        filename: 'bundle.[hash].js',
        path: appPath('build')
    }
};
