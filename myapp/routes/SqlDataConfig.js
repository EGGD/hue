var order = require('../routes/order');
var getUser = require('../api/getUser');
var getColor = require('../api/getColor');
var SqlDataConfig={
    order:order,
    getUser:getUser,
    getColor:getColor
};
module.exports = SqlDataConfig;