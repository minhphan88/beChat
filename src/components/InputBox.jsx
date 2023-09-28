import React, { useState } from "react";
import "../styles/InputBox.css";

function InputBox({ onSend }) {
  const [message, setMessage] = useState("");

  return (
    <div className="input-box">
      <textarea
        className="input-textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="send-button"
        onClick={() => {
          onSend(message);
          setMessage("");
        }}
      >
        Send
      </button>
    </div>
  );
}

export default InputBox;
