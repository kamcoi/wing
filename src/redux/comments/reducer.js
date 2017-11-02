const initialState = {
  destination: "Phnom Penh, Cambodia",
  travelFrom: "2 October 2017",
  travelUntil: "19 October 2017",
  travelType: "Meeting",
  name: "Mohammad Hafiz bin Burhan",
  statusText: "Nomination Rejected",
  commentData: [
    {
      id: "1",
      requestorName: "Ali Muhd Wasil bin Ali Absar",
      commentText:
        "Hafiz, where can we have all beautiful shawties around that area? I want them like right now!",
      submitDate: "13 September 2017",
      submitTime: "3.20pm"
    },
    {
      id: "2",
      requestorName: "Mohammad Hafiz bin Burhan",
      commentText:
        "Hold your horses my comrad, a good man is a man that can hold their lust without giving them up! Conquer your desire and become a great leader like Khairold!",
      submitDate: "21 September 2017",
      submitTime: "11.33pm"
    },
    {
      id: "3",
      requestorName: "Engku Fariez bin Engku Azahan",
      commentText:
        "Did you guys forget about me? Ali, Hafiz, spare me a blonde for a night? Or maybe two? Tired of having a brunette",
      submitDate: "21 October 2017",
      submitTime: "1.51am"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
