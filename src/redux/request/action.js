export const setDestination = data => {
  return {
    type: "SET_DESTINATION",
    data
  };
};

export const setTravelType = data => {
  return {
    type: "SET_TRAVEL_TYPE",
    data
  };
};

export const newRequest = data => {
  return {
    type: "NEW_REQUEST",
    data
  };
};
