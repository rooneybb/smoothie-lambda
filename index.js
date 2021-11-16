const controller = require("./src/controller");

const main = async (event) => {
  console.log(`Starting new event: ${JSON.stringify(event.body)}`);
  const resource = event.resource.split("/")[1];
  const method = event.httpMethod.toLowerCase();
  const data = JSON.parse(event.body);
  try {
    const controlRes = await controller(resource, method, data);
    let res = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(controlRes),
    };
    console.log(`Successful event response: ${JSON.stringify(res)}`);
    return res;
  } catch (e) {
    console.error(`Unexpected Error: { msg: ${e.message}, stack: ${e.stack} }`);
  }
};

module.exports = { main };
