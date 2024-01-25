import React, { useState } from "react";
import TextField from "../../Textfield/Textfield";
import avatar from "../../../assets/images/avatar.png";
import { Chat } from "./ChatApp.types";
import ChatList from "../ChatList/ChatList";
import ChatMessage from "../ChatMessages/ChatMessages";

const ChatApp: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const chats: Chat[] = [
    {
      id: 1,
      name: "Roger Schmidt",
      image: avatar,
      messages: [
        { id: 1, sender: "Diogo Guerreiro", text: "Hello in Chat 1!" },
        { id: 2, receiver: "Roger Schmidt", text: "Hi there in Chat 1!" },
      ],
    },
    {
      id: 2,
      name: "Jörn-Erik Wolf",
      image: avatar,
      messages: [
        { id: 1, sender: "Diogo Guerreiro", text: "Hello in Chat 2!" },
        { id: 2, receiver: "Jörn-Erik Wolf", text: "Hi there in Chat 2!" },
      ],
    },
    {
      id: 3,
      name: "Javi García",
      image: avatar,
      messages: [
        { id: 1, sender: "Diogo Guerreiro", text: "Hello in Chat 3!" },
        { id: 2, receiver: "Javi García", text: "Hi there in Chat 3!" },
      ],
    },
  ];

  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
  };

  const getChatById = (chats: any, selectedChat: any) => {
    return chats.find((chat: any) => chat.id === selectedChat);
  };

  const selectedChatInfo = getChatById(chats, selectedChat);

  return (
    <div className="flex gap-4 p-5">
      <div className="w-1/4 bg-white shadow-lg rounded-lg">
        <ChatList chats={chats} onSelectChat={handleSelectChat} />
      </div>
      <div className="w-3/4">
        {selectedChat && (
          <>
            <>
              <div className="w-full py-8 px-5 h-10 bg-white rounded-lg flex gap-3 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src={selectedChatInfo.image}
                  alt="Rounded avatar"
                />
                <h1>{selectedChatInfo.name}</h1>
              </div>
              <ChatMessage messages={selectedChatInfo.messages || []} />
            </>
            <div className="bg-white">
              <TextField label={"Send Message"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
