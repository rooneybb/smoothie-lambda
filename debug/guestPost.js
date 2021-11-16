// remember to ensure using smoothietest db
const { main } = require("../index");
const testData = require("../resources/examples/examplePostEvent");
const { v4: uuidv4, stringify } = require("uuid");
const random_name = require("node-random-name");

// use smoothietest db

const fillCount = 50;

const createGuest = () => {
  const d = new Date();
  const id = uuidv4();
  const timeStamp = d.getTime();
  const name = random_name().split(" ");
  const firstName = name[0];
  const lastName = name[1];
  const isComingBool = Math.floor(Math.random() * 3);
  const isComing = isComingBool > 0 ? true : false;
  const partySize = isComing ? Math.floor(Math.random() * 10) + 1 : 0;
  return {
    id,
    timeStamp,
    firstName,
    lastName,
    isComing,
    partySize,
  };
};

const debugRun = async () => {
  for (let i = 0; i < fillCount; i++) {
    const guest = createGuest();
    const updatedData = {
      ...testData.event,
      body: JSON.stringify({ ...guest }),
    };
    const res = await main(updatedData);
  }

  return;
};

debugRun();
