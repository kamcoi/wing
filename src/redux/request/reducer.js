const initialState = [
  {
    status: "Nominate",
    notification: "new",
    ref: "1001",
    timeStamp: "1 Jan 2017, 8.00am",
    destination: "Singapore",
    travelFrom: "21 Oct",
    travelUntil: "10 Nov",
    travelType: "Site Survey",
    justificationText:
      "I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
    requestorName: "Ali Muhd Wasil bin Ali Absar bin Al Amin",
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
    cost: "12000",
    budget: "34000",
    costCategory: "EEIU",
    costCentre: "BMCE02",
    dialogBox: "Hi",
    requestorDesignation: "Big Bawwsss",
    commentTextLatest: "Ali, What is your name?",
    comments: [
      {
        senderId: "1",
        senderName: "Ali Muhd Wasil bin Ali Absar",
        commentText:
          "Hafiz, where can we have all beautiful shawties around that area? I want them like right now!",
        timeStamp: "13 September 2017, 3.20pm"
      }
    ]
  },
  {
    status: "eeiu",
    ref: "2",
    timeStamp: "1 Jan 2017, 8.00am",
    destination: "Santa Cruz, Peru",
    travelFrom: "21 Oct",
    travelUntil: "10 Nov",
    travelType: "Site Survey",
    justificationText:
      "I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
    requestorName: "Ali Muhd Wasil bin Ali Absar bin Al Amin",
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
    cost: "12000",
    budget: "34000",
    costCategory: "EEIU",
    costCentre: "BMCE02",
    requestorDesignation: "Big Bawwsss",
    commentTextLatest: "Ali, What is your name?",
    comments: [
      {
        senderId: "1",
        senderName: "Ali Muhd Wasil bin Ali Absar",
        commentText:
          "Hafiz, where can we have all beautiful shawties around that area? I want them like right now!",
        timeStamp: "13 September 2017, 3.20pm"
      }
    ]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_DESTINATION":
      return {
        [0]: {
          destination: action.data
        }
      };

    case "SET_TRAVEL_TYPE":
      return {
        [0]: {
          travelType: action.data
        }
      };
    default:
      return state;
  }
};
