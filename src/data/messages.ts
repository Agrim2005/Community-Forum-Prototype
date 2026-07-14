import type {
  Conversation,
} from "@/types/message.types";

export const conversations: Conversation[] = [
  {
    id: "john-doe",

    name: "John Doe",

    avatar:
      "https://i.pravatar.cc/150?img=12",

    isOnline: true,

    messages: [
      {
        id: "john-1",

        sender: "John Doe",

        text:
          "Hey! How's your Community Forum project going?",

        time: "10:15 AM",

        isMine: false,
      },

      {
        id: "john-2",

        sender: "You",

        text:
          "It's going well! I just completed the Communities module.",

        time: "10:17 AM",

        isMine: true,
      },

      {
        id: "john-3",

        sender: "John Doe",

        text:
          "That's great. Looking forward to seeing the final version!",

        time: "10:18 AM",

        isMine: false,
      },
    ],
  },

  {
    id: "sarah-johnson",

    name: "Sarah Johnson",

    avatar:
      "https://i.pravatar.cc/150?img=47",

    isOnline: false,

    messages: [
      {
        id: "sarah-1",

        sender: "Sarah Johnson",

        text:
          "Hey! How is the project coming along?",

        time: "Yesterday",

        isMine: false,
      },

      {
        id: "sarah-2",

        sender: "You",

        text:
          "Going well. I'm currently improving the messaging system.",

        time: "Yesterday",

        isMine: true,
      },

      {
        id: "sarah-3",

        sender: "Sarah Johnson",

        text:
          "Nice! Send me an update when it's ready.",

        time: "Yesterday",

        isMine: false,
      },
    ],
  },
];