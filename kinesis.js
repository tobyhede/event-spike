'use strict';

module.exports.handler = async (event, context) => {

  event.Records.forEach(record => {
    const payload = new Buffer(record.kinesis.data, 'base64').toString('ascii')
    const data = JSON.parse(payload)
    console.log(data);
  });

  console.log(`Processed: ${event.Records.length}`);
  return {};
};
