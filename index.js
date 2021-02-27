const controller = require("./src/controller");

const main = async (event) => {
  console.log(JSON.stringify(event));
  const resource = event.resource.split("/")[1];
  const method = event.httpMethod.toLowerCase();
  const data = JSON.parse(event.body);
  const test = await controller(resource, method, data);
  return test;
};

module.exports = main;
