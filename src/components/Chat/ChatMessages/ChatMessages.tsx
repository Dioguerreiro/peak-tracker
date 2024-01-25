import React from "react";
import { IChatMessages } from "./ChatMessages.types";

const ChatMessages: React.FC<IChatMessages> = ({ messages }) => {
  return (
    <div className="bg-sky-50 p-4 h-96 overflow-y-auto">
      {messages.map((message) => (
        <>
          <p
            className={`mb-4 text-xs flex ${
              message.sender
                ? "justify-end items-end"
                : "justify-start items-start"
            }`}
          >
            {message.sender ? "You" : message.receiver}
          </p>
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.sender
                ? "justify-end items-end"
                : "justify-start items-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg shadow-md ${
                !message.sender
                  ? "bg-white text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ChatMessages;
