const Lambda = require('aws-sdk/clients/lambda');

const lambdaClient = new Lambda({ region: 'eu-west-2' });

const invokeLambda = params =>
  new Promise((res, rej) =>
    lambdaClient.invoke(params, (err, data) =>
      err && !data ? rej(err) : res(data)
    )
  );

exports.handler = async (event, context, callback) => {
  const result = await invokeLambda({
    FunctionName: process.env.JavaFunction,
    InvocationType: 'RequestResponse'
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      callJavaResult: JSON.parse(result.Payload.body)
    })
  };
};
