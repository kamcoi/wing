const initialState = {
  destination: "Monte Carlo, Monaco",
  travelFrom: "21 Oct",
  travelUntil: "10 Nov",
  travelType: "Site Survey",
  justificationText:
    "I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner"
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
