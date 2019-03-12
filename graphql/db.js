import AWS from 'aws-sdk';

AWS.config.update({
  region: 'eu-west-2',
  accessKeyId: '',
  secretAccessKey: ''
});

const db = new AWS.DynamoDB();

export default async () => {
  const result = await db
    .scan({
      TableName: 'Test'
    })
    .promise();
  console.log(JSON.stringify(result));
  return result.Items.map(i =>
    Object.keys(i).reduce((t, k) => ({ ...t, [k]: i[k].N || i[k].S }), {})
  );
};
