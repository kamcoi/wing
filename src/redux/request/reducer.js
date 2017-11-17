const initialState = [
	{
		ticketNumber: "1",
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
		],
		friends: [
			{
				staffName: "Engku Fariez bin Engku Azahan",
				staffDivision: "Group Digital Centre"
			},
			{
				staffName: "Nur Izzati binti Amir Amzah",
				staffDivision: "Group Procurement"
			}
		]
	},
	{
		ticketNumber: "2",
		status: "Nominate",
		notification: "new",
		ref: "2322",
		status: "eeiu",
		ref: "2",
		timeStamp: "14 Feb 2017, 5.10pm",
		destination: "West Bank, Palestine",
		travelFrom: "12 Feb",
		travelUntil: "5 Mar",
		travelType: "Conference",
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
			},
			{
				senderId: "2",
				senderName: "Mohammad Hafiz bin Burhan",
				commentText:
					"Hold your horses my comrad, a good man is a man that can hold their lust without giving them up! Conquer your desire and become a great leader like Khairold!",
				timeStamp: "21 September 2017, 11.33pm"
			}
		]
	},
	{
		ticketNumber: "3",
		status: "Draft",
		notification: "",
		ref: "7646",
		timeStamp: "31 Aug 2017, 8.00am",
		destination: "New Delhi, India",
		travelFrom: "1 Feb",
		travelUntil: "10 Feb",
		travelType: "Product Briefing",
		justificationText: "I like it aha - aha!",
		requestorName: "Ali Muhd Wasil bin Ali Absar bin Al Amin",
		requestorDivision: "Group Brand and Communication",
		additionalTravellerName1: "Abu bin Ah Beng",
		additionalTravellerDivision1: "IT&NT",
		additionalTravellerName2: "Abu bin Ah Ngah",
		additionalTravellerDivision2: "IT&NT",
		additionalTravellerName3: "Abu bin Ah Teng",
		additionalTravellerDivision3: "IT&NT",
		eeiuName: "The Rock",
		nominatorName: "Triple H",
		endorserName: "Stone Cold Steve Austin",
		approverName: "Mankind",
		cost: "7870",
		budget: "8000",
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
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_DESTINATION":
			return {
				[0]: {
					...state,
					...state[0],
					destination: action.data
				}
			};

		case "SET_TRAVEL_TYPE":
			return {
				[0]: {
					...state,
					...state[0],
					travelType: action.data
				}
			};
		default:
			return state;
	}
};
