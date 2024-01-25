import React from "react";
import { IChatCard } from "./ChatCard.types";

const ChatCard: React.FC<IChatCard> = ({ chat, onSelectChat }) => {
  const lastMessage =
    chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;

  return (
    <div className="hover:bg-gray-200 rounded-md pl-2">
      <button
        onClick={() => onSelectChat(chat.id)}
        className="w-full text-left py-2"
      >
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src={chat.image}
            alt="Rounded avatar"
          />
          <h3 className="text-sm font-semibold text-gray-900">{chat.name}</h3>
        </div>

        {lastMessage && (
          <div className="py-4">
            <p className="text-[13px]">{lastMessage.text}</p>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatCard;
