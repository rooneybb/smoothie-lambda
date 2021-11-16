const aws = require("aws-sdk");
const db = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });
const tableName = process.env.tableName || "smoothietest";

const setGuests = async (data) => {
  console.log(`Starting call to setGuests`);
  const test = await updateDb(data);
  console.log(`Successfully finished setGuests call`);
  return test;
};

const updateDb = async (data) => {
  const params = {
    TableName: tableName,
    Item: { ...data },
  };
  try {
    const res = await db.put(params).promise();
    return res;
  } catch (e) {
    console.error(
      `Error updating guests in db: { msg: ${e.message}, stack: ${e.stack} }`
    );
    return e;
  }
};

module.exports = setGuests;
