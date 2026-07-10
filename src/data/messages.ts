import type { Message } from "@/types/message.types";

export const messages: Message[] = [
  {
    id: "1",
    sender: "John Doe",
    text: "Hey! How's your Community Forum project going?",
    time: "10:15 AM",
    isMine: false,
  },
  {
    id: "2",
    sender: "You",
    text: "It's going well! I just completed the Communities module.",
    time: "10:17 AM",
    isMine: true,
  },
  {
    id: "3",
    sender: "John Doe",
    text: "That's great. Looking forward to seeing the final version!",
    time: "10:18 AM",
    isMine: false,
  },
];