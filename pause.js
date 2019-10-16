'use strict';

const AWS = require('aws-sdk');

AWS.config.update({region: 'ap-southeast-2'});
const lambda = new AWS.Lambda();

module.exports.handler = async (event, context) => {

    const fn = event.pathParameters['fn'];
    const concurrency = event.queryStringParameters['concurrency'] || 0;

    const params = {
        FunctionName: fn,
        ReservedConcurrentExecutions: concurrency
    };

    console.log(params);

    try {
        const data = await lambda.putFunctionConcurrency(params).promise();

        console.log(data);

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };

    } catch(err) {

        return {
            statusCode: 500,
            body: JSON.stringify(err),
        };
    }

};
