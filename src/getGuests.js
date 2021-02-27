const aws = require("aws-sdk");
const db = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });

const getGuests = async (data) => {
  console.log(`Hello from getuests: ${JSON.stringify(data)}`);
  const res = await readDb(data);
  return res;
};

const readDb = async (data) => {
  const params = {
    TableName: "smoothiefest",
    Select: "ALL_ATTRIBUTES",
    Limit: 50,
  };
  try {
    const res = await db.scan(params).promise();
    return res.Items;
  } catch (e) {
    console.log(`Error updating guests in db: ${e.message}`);
    return e;
  }
};

module.exports = getGuests;
