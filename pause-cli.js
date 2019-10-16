const AWS = require('aws-sdk');

AWS.config.update({region: 'ap-southeast-2'});
const lambda = new AWS.Lambda();

const args = process.argv.slice(2);

const FUNCTION_NAME = args[0]
const CONCURRENCY = args[1] || 0

const params = {
    FunctionName: FUNCTION_NAME,
    ReservedConcurrentExecutions: CONCURRENCY
};

lambda.putFunctionConcurrency(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else     console.log(data);
});