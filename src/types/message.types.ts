export interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
  isMine: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  messages: Message[];
}