const AWS = require('aws-sdk');

AWS.config.update({region: 'ap-southeast-2'});

const kinesis = new AWS.Kinesis()

const args = process.argv.slice(2);

const STREAM_NAME = args[0];

const MESSAGE_COUNT = 10;

function make(id) {
    const ts = new Date().getTime()
    const data = {
        id,
        ts,
    }

    return {
        StreamName: STREAM_NAME,
        PartitionKey: 'PartitionKey',
        Data: JSON.stringify(data),
    };
}

function send(id) {
    const params = make(id);
    kinesis.putRecord(params, function(err, data) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Success', { id, ...data });
        }
      });
}


for ( var i = 0; i < MESSAGE_COUNT; i++ ) {
    const id = `BATCH-3-${i}`;
    setTimeout(() => send(id), i * 3000);
}

