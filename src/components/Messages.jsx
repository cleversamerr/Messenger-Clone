import React, { useEffect, useRef } from "react";
import Message from "./Message";
import FlipMove from "react-flip-move";
import "../css/messages.css";

const Messages = ({ messages, username }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef) messagesRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages-container">
      <FlipMove>
        {messages.map((message) => (
          <Message key={message.id} username={username} message={message} />
        ))}
      </FlipMove>

      <div ref={messagesRef} />
    </div>
  );
};

export default Messages;
