const aws = require("aws-sdk");
const db = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });
const tableName = process.env.tableName || "smoothietest";

const getGuests = async () => {
  console.log(`Starting getGuests call`);
  const res = await readDb();
  console.log(`Successfully finished getGuests call`);
  return res;
};

const readDb = async () => {
  readLimit = 1000;
  let params = {
    TableName: tableName,
    Select: "ALL_ATTRIBUTES",
    Limit: 50,
  };

  try {
    let items = [];
    let lastEvalKeyExists = true;
    while (items.length < readLimit && lastEvalKeyExists) {
      const res = await db.scan(params).promise();
      items.push(...res.Items);
      if (res.LastEvaluatedKey) {
        params = {
          ...params,
          ExclusiveStartKey: res.LastEvaluatedKey,
        };
      } else {
        lastEvalKeyExists = false;
      }
    }
    return items;
  } catch (e) {
    console.error(
      `Error updating guests in db: { msg: ${e.message}, stack: ${e.stack} }`
    );
    return e;
  }
};

module.exports = getGuests;
