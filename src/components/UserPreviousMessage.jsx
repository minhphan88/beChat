import React from "react";
import "../styles/UserPreviousMessage.css";

function UserPreviousMessage({ content }) {
  return (
    <div className="user-message-container">
      <div className="user-message"> {content}</div>
      <span role="img" aria-label="user-icon" className="user-icon">
        👤
      </span>
    </div>
  );
}

export default UserPreviousMessage;
