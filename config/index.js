var configValue = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${configValue.uname}:${configValue.pwd}@ds151117.mlab.com:51117/nodetodosample`;
    }
}
var configValues = require('./config');


