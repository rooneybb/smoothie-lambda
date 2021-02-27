const main = require("../index");
const testData = require("../resources/examples/exampleGetEvent");

const debugRun = async () => {
  const data = testData.event;
  const res = await main(data);
  return;
};

debugRun();
