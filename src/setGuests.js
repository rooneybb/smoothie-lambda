const aws = require("aws-sdk");
const db = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });

const setGuests = async (data) => {
  console.log(`Hello from setGuests: ${JSON.stringify(data)}`);
  const test = await updateDb(data);
  return "test setGuests";
};

const updateDb = async (data) => {
  const params = {
    TableName: "smoothiefest",
    Item: { id: 1, ...data },
  };
  try {
    const test = await db.put(params).promise();
    return test;
  } catch (e) {
    console.log(`Error updating guests in db: ${e.message}`);
    return e;
  }
};

module.exports = setGuests;
