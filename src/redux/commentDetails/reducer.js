const initialState = {
  destination: "Phnom Penh, Cambodia",
  travelFrom: "2 October 2017",
  travelUntil: "19 October 2017",
  travelType: "Meeting",
  name: "Mohammad Hafiz bin Burhan",
  statusText: "Nomination Rejected"
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
