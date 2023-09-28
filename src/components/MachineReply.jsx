import React, { useState, useEffect } from "react";
import "../styles/MachineReply.css";

function MachineReply({ content }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsReady(true);
    }, 1000); // 3 seconds delay before showing the content

    return () => clearTimeout(delay);
  }, [content]);

  return (
    <div className="machine-reply-container">
      <div className="machine-reply">
        {isReady ? content : <span className="typing-indicator"></span>}
      </div>
      <span role="img" aria-label="machine-icon" className="machine-icon">
        ⚙️
      </span>
    </div>
  );
}

export default MachineReply;
