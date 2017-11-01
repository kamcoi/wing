const initialState = [
  {
    activityDate: "1 January 2017",
    data: [
      {
        id: "1",
        requestorName: "Abu bin Ahmad",
        endorserName: "Ahmad bin Ali",
        nominatorName: "Abu bin Awang",
        approverName: "Ah Teng bin Ah Kaw",
        action: "have send you",
        doc: "Travel Request",
        time: "2.30pm"
      },
      {
        id: "2",
        requestorName: "Abuwada bin Ahmad",
        endorserName: "Ahmad bin Ali",
        nominatorName: "Abu bin Awang",
        approverName: "Ah Teng bin Ah Kaw",
        action: "have send you",
        doc: "Travel Request",
        time: "2.30pm"
      },
      {
        id: "3",
        requestorName: "Abuvsdvr bin Ahmad",
        endorserName: "Ahmad bin Ali",
        nominatorName: "Abu bin Awang",
        approverName: "Ah Teng bin Ah Kaw",
        action: "have send you",
        doc: "Travel Request",
        time: "2.30pm"
      }
    ]
  },
  {
    activityDate: "2 January 2017",
    data: [
      {
        id: "1",
        requestorName: "Abuvwbr bin Ahmad",
        endorserName: "Ahmad bin Ali",
        nominatorName: "Abu bin Awang",
        approverName: "Ah Teng bin Ah Kaw",
        action: "have send you",
        doc: "Travel Request",
        time: "2.30pm"
      },
      {
        id: "2",
        requestorName: "Abrnrtnu bin Ahmad",
        endorserName: "Ahmad bin Ali",
        nominatorName: "Abu bin Awang",
        approverName: "Ah Teng bin Ah Kaw",
        action: "have send you",
        doc: "Travel Request",
        time: "2.30pm"
      },
      {
        id: "3",
        requestorName: "Abwgwegu bin Ahmad",
        endorserName: "Ahmad bin Ali",
        nominatorName: "Abu bin Awang",
        approverName: "Ah Teng bin Ah Kaw",
        action: "have send you",
        doc: "Travel Request",
        time: "2.30pm"
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
