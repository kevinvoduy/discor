import aws from 'aws-sdk';

aws.config.update({ region: 'us-west-2' });

var ddb = new aws.DynamoDB({apiVersion: '2012-08-10'});

ddb.listTables({Limit: 10}, function(err, data) {
  if (err) {
    console.log('Error', err.code);
  } else {
    console.log('Table names are ', data.TableNames);
  }
});