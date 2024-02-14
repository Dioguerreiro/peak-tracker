import { Chat } from "../ChatApp/ChatApp.types";

export interface IChatList {
  chats: Chat[];
  selectedChat: number | null;
  onSelectChat: (chatId: number) => void;
}
