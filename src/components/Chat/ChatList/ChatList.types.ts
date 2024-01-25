import { Chat } from "../ChatApp/ChatApp.types";

export interface IChatList {
  chats: Chat[];
  onSelectChat: (chatId: number) => void;
}
