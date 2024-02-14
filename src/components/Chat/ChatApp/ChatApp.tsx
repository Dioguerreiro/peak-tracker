import React, { useState } from "react";
import TextField from "../../Textfield/Textfield";
import avatar from "../../../assets/images/avatar.png";
import { Chat } from "./ChatApp.types";
import ChatList from "../ChatList/ChatList";
import ChatMessage from "../ChatMessages/ChatMessages";
import { faPlus, faPaperPlaneTop, faEllipsis } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="p-5 flex h-full grow">
      <div className="flex bg-white rounded-lg h-full grow">
        <div className="w-1/4">
          <ChatList
            chats={chats}
            selectedChat={selectedChat}
            onSelectChat={handleSelectChat}
          />
        </div>
        <div className="w-3/4 p-4">
          {selectedChat && (
            <>
              <>
                <div className="w-full justify-between items-center flex pb-4">
                  <div className="flex flex-col gap-1">
                    <h1>{selectedChatInfo.name}</h1>
                    <div className="flex gap-2 items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className=" text-xs text-neutral-400">Online</span>
                    </div>
                  </div>
                  <div>
                    <button className="flex justify-center items-center rounded-full p-2">
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        className=" text-neutral-600"
                      />
                    </button>
                  </div>
                </div>
              </>
              <div className="bg-neutral-100 rounded-lg p-4">
                <ChatMessage messages={selectedChatInfo.messages || []} />
                <div className="bg-white rounded-lg p-2 flex gap-5">
                  <button className="flex justify-center items-center border border-neutral-200 rounded-full p-2 w-[60px]">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className=" text-neutral-600"
                    />
                  </button>
                  <TextField label={"Send Message"} />
                  <button className="flex justify-center items-center border border-neutral-200 rounded-full p-2 w-[60px]">
                    <FontAwesomeIcon
                      icon={faPaperPlaneTop}
                      className=" text-neutral-600"
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
