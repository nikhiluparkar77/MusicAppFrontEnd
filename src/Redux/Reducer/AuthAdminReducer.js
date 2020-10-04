const { CURRENT_ADMIN, LIST_ADMIN } = require("../Action/Type");

const initalState = {
  isAdmnAuthenticated: false,
  admin: {},
  listOfAdmin: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case CURRENT_ADMIN:
      return {
        ...state,
        isAdmnAuthenticated: action.payload,
        admin: action.payload,
      };
    case LIST_ADMIN:
      return {
        ...state,
        isAdmnAuthenticated: action.payload,
        admin: action.payload,
      };
    default:
      return state;
  }
}
