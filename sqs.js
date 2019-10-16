'use strict';

module.exports.handler = async (event, context) => {

  event.Records.forEach(record => {
    const { body } = record;
    console.log(body);
  });

  console.log(`Processed: ${event.Records.length}`);
  return {};
};
