export interface Chat {
  id: number;
  name: string;
  image: string;
  messages: Message[];
}

export interface Message {
  id: number;
  sender?: string;
  receiver?: string;
  text: string;
}
