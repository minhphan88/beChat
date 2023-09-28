import { createContext, useReducer } from "react";
import apiCall from "../actions/apiCall"; // Import apiCall
import { reducer, initialState } from "./ChatReducer"; // Import actionTypes

const ChatContext = createContext({
  state: [],
  dispatch: () => {},
  handleSendMessage: () => {} // Add handleSendMessage to the context
});

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSendMessage = (content) => {
    const newUserMessage = { type: "user", content: content };
    const updatedState = [...state, newUserMessage];

    apiCall(updatedState).then((reply) => {
      dispatch({ type: "RECEIVE_REPLY", content: reply });
    });

    dispatch({ type: "SEND_MESSAGE", content });
  };

  return (
    <ChatContext.Provider value={{ state, dispatch, handleSendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
