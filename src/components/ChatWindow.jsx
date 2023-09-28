import React, { useContext, useEffect, useRef } from "react";
import ChatContext from "../contexts/ChatContext";
import InputBox from "./InputBox";
import UserPreviousMessage from "./UserPreviousMessage";
import MachineReply from "./MachineReply";

import "../styles/ChatWindow.css";

function ChatWindow() {
  const { state, handleSendMessage } = useContext(ChatContext);
  const messagesEndRef = useRef(null); // Create a reference

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]); // Run the effect whenever the state (messages) changes
  return (
    <div className="chat-window">
      <div className="window-header">
        <span
          role="img"
          aria-label="information-icon"
          className="information-icon"
        >
          ℹ️
        </span>
        <span className="window-name">QBEChat</span>
      </div>
      <div className="messages">
        {state.map((message, index) =>
          message.type === "user" ? (
            <UserPreviousMessage key={index} content={message.content} />
          ) : (
            <MachineReply key={index} content={message.content} />
          )
        )}
        <div ref={messagesEndRef}></div> {/* Add this line */}
      </div>
      <InputBox onSend={handleSendMessage} />
    </div>
  );
}

export default ChatWindow;
