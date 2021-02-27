const getGuests = require("./getGuests");
const setGuests = require("./setGuests");

const controller = async (resource, method, data) => {
  const backendController = {
    guests: {
      post: setGuests,
      get: getGuests,
    },
  };

  const methodToCall = backendController[resource][method];
  const res = await methodToCall(data);
  return res;
};

module.exports = controller;
