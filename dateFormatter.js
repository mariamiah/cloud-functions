const moment = require('moment')
exports.formattedDate = () => {
    return moment().format('MM DD YYYY, h:mm:ss a');
}