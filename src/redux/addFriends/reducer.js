const initialState = [
  {
    id: "1",
    staffName: "Engku Fariez bin Engku Azahan",
    staffDivision: "Group Brand and Communication"
  },
  {
    id: "2",
    staffName: "Khairold Safri bin Ibrahim",
    staffDivision: "Group Marketing"
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
