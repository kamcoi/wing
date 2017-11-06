const initialState = {
  ref: "1234-ABCD",
  applyDate: "1 Jan 2017",
  applyTime: "8.00am",
  destination: "Monte Carlo, Monaco",
  travelFrom: "21 Oct",
  travelUntil: "10 Nov",
  travelType: "Site Survey",
  justificationText:
    "I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
  requestorName: "Ali Muhd Wasil bin Ali Absar",
  requestorDivision: "Group Brand and Communication",
  additionalTravellerName1: "Abu bin Ah Beng",
  additionalTravellerDivision1: "IT&NT",
  additionalTravellerName2: "Abu bin Ah Ngah",
  additionalTravellerDivision2: "IT&NT",
  additionalTravellerName3: "Abu bin Ah Teng",
  additionalTravellerDivision3: "IT&NT",
  eeiuName: "Abu bin Awang",
  nominatorName: "Jusoh bin Ali",
  endorserName: "Ali bin Awang",
  approverName: "Kabil bin Ali",
  cost: "RM 12000.00",
  budget: "RM 34000.00",
  costCategory: "EEIU",
  costCentre: "BMCE02",
  requestorDesignation: "Big Bawwsss"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return {
        ...state
      };
    case "SET_DESTINATION":
      return {
        ...state,
        destination: action.data
      };

    case "SET_COST":
      return {
        ...state,
        cost: action.data
      };
    default:
      return state;
  }
};
