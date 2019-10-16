

### Usage
Assumes you have configured your aws credentials

```
yarn install
sls deploy

# Send sqs message
# Requires sqs url
# node send-sqs.js {SQS_URL}
node send-sqs.js https://sqs.REGION.amazonaws.com/ACCOUNT_ID/event-spike-sqs-dev

# Send kinesis message
# Requires kinesis stream name
# node send-kinesis.js {STREAM_NAME}
node send-kinesis.js event-spike-kinesis-dev

# Pause function
# node pause.js {FUNCTION_NAME} {CONCURRENCY}
node pause.js event-spike-dev-sqs

## Resume function
node pause.js event-spike-dev-sqs 1
```