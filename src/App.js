import React from "react";
import ChatWindow from "./components/ChatWindow";
import { ChatProvider } from "./contexts/ChatContext"; // Import ChatProvider instead of ChatContext
import "./styles/App.css";

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}

export default App;
