const initialState = [
  {
    id: "Applicability",
    text1: "Hi, Ho, Lets Go!",
    text2: "What is your name?",
    text3: "Hi Guys, what are you doing?",
    text4: "Hi Guys, where are you going?"
  },
  {
    id: "Oversea Travel Requirement",
    text1: "hvbjcas",
    text2: "ascasgcuais",
    text3: "ohehwoewe",
    text4: "aasasc"
  },
  {
    id: "Approval",
    text1: "Hi, Ho, Lets Go!",
    text2: "What is your name?",
    text3: "Hi Guys, what are you doing?",
    text4: "Hi Guys, where are you going?"
  },
  {
    id: "Monitoring of Travel",
    text1: "hvbjcas",
    text2: "ascasgcuais",
    text3: "ohehwoewe",
    text4: "aasasc"
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
