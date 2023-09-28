export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return [...state, { type: "user", content: action.content }];
    case "RECEIVE_REPLY":
      return [...state, { type: "machine", content: action.content }];
    default:
      return state;
  }
};
