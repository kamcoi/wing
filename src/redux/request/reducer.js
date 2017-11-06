const initialState = [
  {
    status: "eeiu",
    notification: "new",
    ref: "1001",
    timeStamp: "1 Jan 2017, 8.00am",
    destination: "Monte Carlo, Monaco",
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
      },
      {
        senderId: "2",
        senderName: "Mohammad Hafiz bin Burhan",
        commentText:
          "Hold your horses my comrad, a good man is a man that can hold their lust without giving them up! Conquer your desire and become a great leader like Khairold!",
        timeStamp: "21 September 2017, 11.33pm"
      },
      {
        senderId: "3",
        senderName: "Engku Fariez bin Engku Azahan",
        commentText:
          "Did you guys forget about me? Ali, Hafiz, spare me a blonde for a night? Or maybe two? Tired of having a brunette",
        timeStamp: "21 October 2017, 1.51am"
      }
    ]
  },
  {
    status: "Submit",
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
        commentText: "I like it aha aha",
        timeStamp: "13 September 2017, 3.20pm"
      },
      {
        senderId: "2",
        senderName: "Mohammad Hafiz bin Burhan",
        commentText: "Oh yeah!",
        timeStamp: "21 September 2017, 11.33pm"
      },
      {
        senderId: "3",
        senderName: "Engku Fariez bin Engku Azahan",
        commentText: "Aha yeah haaa!",
        timeStamp: "21 October 2017, 1.51am"
      }
    ]
  },
  {
    status: "Draft",
    ref: "3",
    timeStamp: "17 Jan 2018, 10.13am",
    destination: "West Bank, Palestine",
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
        commentText: "I like it aha aha",
        timeStamp: "13 September 2017, 3.20pm"
      },
      {
        senderId: "2",
        senderName: "Mohammad Hafiz bin Burhan",
        commentText: "Oh yeah!",
        timeStamp: "21 September 2017, 11.33pm"
      },
      {
        senderId: "3",
        senderName: "Engku Fariez bin Engku Azahan",
        commentText: "Aha yeah haaa!",
        timeStamp: "21 October 2017, 1.51am"
      }
    ]
  },
  {
    status: "Endorsement",
    ref: "4",
    timeStamp: "17 Jan 2018, 10.13am",
    destination: "West Bank, Palestine",
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
        commentText: "I like it aha aha",
        timeStamp: "13 September 2017, 3.20pm"
      },
      {
        senderId: "2",
        senderName: "Mohammad Hafiz bin Burhan",
        commentText: "Oh yeah!",
        timeStamp: "21 September 2017, 11.33pm"
      },
      {
        senderId: "3",
        senderName: "Engku Fariez bin Engku Azahan",
        commentText: "Aha yeah haaa!",
        timeStamp: "21 October 2017, 1.51am"
      }
    ]
  },
  {
    status: "Nominate",
    ref: "5",
    timeStamp: "17 Jan 2018, 10.13am",
    destination: "West Bank, Palestine",
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
        commentText: "I like it aha aha",
        timeStamp: "13 September 2017, 3.20pm"
      },
      {
        senderId: "2",
        senderName: "Mohammad Hafiz bin Burhan",
        commentText: "Oh yeah!",
        timeStamp: "21 September 2017, 11.33pm"
      },
      {
        senderId: "3",
        senderName: "Engku Fariez bin Engku Azahan",
        commentText: "Aha yeah haaa!",
        timeStamp: "21 October 2017, 1.51am"
      }
    ]
  },
  {
    status: "Approval",
    notification: "new",
    ref: "6",
    timeStamp: "17 Jan 2018, 10.13am",
    destination: "West Bank, Palestine",
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
        commentText: "I like it aha aha",
        timeStamp: "13 September 2017, 3.20pm"
      },
      {
        senderId: "2",
        senderName: "Mohammad Hafiz bin Burhan",
        commentText: "Oh yeah!",
        timeStamp: "21 September 2017, 11.33pm"
      },
      {
        senderId: "3",
        senderName: "Engku Fariez bin Engku Azahan",
        commentText: "Aha yeah haaa!",
        timeStamp: "21 October 2017, 1.51am"
      }
    ]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
