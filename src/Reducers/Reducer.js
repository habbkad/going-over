const person = [
  {
    name: "habib",
    description: "habib is a good",
  },
  {
    name: "Faisal",
    description: "Faisal is a good",
  },
];

const Reducer = (state = person, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((person) => person.name !== action.payload);
    case "EDIT":
      return state.map((person) => {
        if (person.name === action.payload.name) {
          return action.payload;
        } else {
          return person;
        }
      });
    default:
      return state;
  }
};

export default Reducer;
