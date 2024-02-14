import React from "react";
import ChatCard from "../ChatCard/ChatCard";
import { IChatList } from "./ChatList.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsis } from "@fortawesome/pro-solid-svg-icons";

const ChatList: React.FC<IChatList> = ({ chats, selectedChat, onSelectChat }) => {
  return (
    <div className="flex h-full flex-col divide-y divide-gray-200 border-r border-r-neutral-200">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xs font-semibold uppercase text-gray-400 mb-1">
          Chats
        </h2>
        <div className="flex gap-5">
          <button className="flex justify-center items-center border border-neutral-200 rounded-full p-2">
            <FontAwesomeIcon icon={faPlus} className=" text-neutral-600" />
          </button>
          <button>
            <FontAwesomeIcon icon={faEllipsis} className=" text-neutral-600" />
          </button>
        </div>
      </div>

      {chats.map((chat) => (
        <ChatCard key={chat.id} chat={chat} onSelectChat={onSelectChat} isSelected={chat.id === selectedChat} />
      ))}
    </div>
  );
};

export default ChatList;
