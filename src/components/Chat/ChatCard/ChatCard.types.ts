import { Chat } from "../ChatApp/ChatApp.types";

export interface IChatCard {
  chat: Chat;
  onSelectChat: (chatId: number) => void;
}
