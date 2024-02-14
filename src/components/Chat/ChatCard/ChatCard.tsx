import React from "react";
import { IChatCard } from "./ChatCard.types";

const ChatCard: React.FC<IChatCard> = ({ chat, isSelected, onSelectChat }) => {
  const lastMessage =
    chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;

  return (
    <div className="flex">
      <div className={`w-1 ${isSelected ? 'bg-neutral-800' : ''}`}></div>
      <div className={`py-8 px-4 w-full ${isSelected ? 'bg-neutral-50' : ''}`}>
      <button
        onClick={() => onSelectChat(chat.id)}
        className="w-full flex gap-3"
      >
        <img
          className="w-12 h-12 rounded-full"
          src={chat.image}
          alt="Rounded avatar"
        />
        <div className="flex flex-col justify-start items-start">
          <p className="font-semibold text-base text-gray-900">{chat.name}</p>
          {lastMessage && <p className="text-base">{lastMessage.text}</p>}
        </div>
      </button>
    </div>
    </div>
    
  );
};

export default ChatCard;
