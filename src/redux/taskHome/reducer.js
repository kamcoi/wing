const initialState = [
  {
    id: "1",
    requestorName: "Ali Muhd Wasil bin Ali Absar",
    destination: "Riyadh, Saudi Arabia",
    travelType: "Berdansa",
    cost: "2.4 billion"
  },
  {
    id: "2",
    requestorName: "Ali Muhd Wasil bin Ali Absar",
    destination: "Riyadh, Saudi Arabia",
    travelType: "Berdansa",
    cost: "2.4 billion"
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
