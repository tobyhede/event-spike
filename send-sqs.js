const AWS = require('aws-sdk');

AWS.config.update({region: 'ap-southeast-2'});

const sqs = new AWS.SQS();

const args = process.argv.slice(2);

const QUEUE_URL = args[0];

const MESSAGE_COUNT = 10;

function make(id) {
    const ts = new Date().getTime()

    return {
        MessageBody: `{id: ${id} ts: ${ts}}`,
        QueueUrl: QUEUE_URL
    };
}

function send(id) {
    const params = make(id);
    sqs.sendMessage(params, function(err, data) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Success', { id, MessageId: data.MessageId });
        }
      });
}

for ( var i = 0; i < MESSAGE_COUNT; i++ ) {
    const id = `BATCH-1-${i}`;
    setTimeout(() => send(id), i * 3000);
}


