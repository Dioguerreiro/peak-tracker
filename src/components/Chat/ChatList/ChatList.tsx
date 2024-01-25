import React from "react";
import ChatCard from "../ChatCard/ChatCard";
import { IChatList } from "./ChatList.types";

const ChatList: React.FC<IChatList> = ({ chats, onSelectChat }) => {
  return (
    <div className="flex flex-col gap-5 py-3 px-5 divide-y divide-gray-200">
      <h2 className="text-xs font-semibold uppercase text-gray-400 mb-1">
        Chats
      </h2>
      {chats.map((chat) => (
        <ChatCard key={chat.id} chat={chat} onSelectChat={onSelectChat} />
      ))}
    </div>
  );
};

export default ChatList;
