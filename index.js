const format = require('./dateFormatter');

exports.helloHTTP = function helloHTTP(req, res){
    res.status(200).send(format.formattedDate())
}

exports.psHelloPubSub = function helloPubSub(data, context, callback){
    console.log(`hello PubSub ${format.formattedDate()}`);
}

exports.psStorage = function helloStorage(data,context, callback){
    console.log(`hello Storage ${format.formattedDate()}`);
}