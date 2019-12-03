var AWS = require("aws-sdk"); // must be npm installed to use

var sns = new AWS.SNS({
  endpoint: "http://127.0.0.1:4002",
  region: "ap-southeast-2"
});

sns.publish(
  {
    Message: { text: "foo" },
    MessageStructure: "json",
    TopicArn: "arn:aws:sns:ap-southeast-2:123456789012:cs-square-sizer"
  },
  () => {
    console.log("ping");
  }
);
