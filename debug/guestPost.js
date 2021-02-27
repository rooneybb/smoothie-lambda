const main = require("../index");
const testData = require("../resources/examples/examplePostEvent");

const debugRun = async () => {
  const data = testData.event;
  const res = await main(data);
  return;
};

debugRun();
